'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';

export interface SelectOption {
    value: string;
    label: string;
}

export interface SelectboxProps {
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large';
    options: SelectOption[];
    value?: string;
    placeholder?: string;
    label?: string;
    errorMessage?: string;
    disabled?: boolean;
    onChange?: (value: string) => void;
    className?: string;
}

export const Selectbox: React.FC<SelectboxProps> = ({
    variant = 'primary',
    size = 'medium',
    options = [],
    value = '',
    placeholder = '선택하세요',
    label,
    errorMessage,
    disabled = false,
    onChange,
    className,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value);
    const selectRef = useRef<HTMLDivElement>(null);

    // 선택된 옵션의 라벨 찾기
    const selectedOption = options.find(option => option.value === selectedValue);
    const displayText = selectedOption ? selectedOption.label : placeholder;

    // 외부 클릭 감지
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // value prop 변경 감지
    useEffect(() => {
        setSelectedValue(value);
    }, [value]);

    const handleToggle = () => {
        if (!disabled) {
            setIsOpen(!isOpen);
        }
    };

    const handleOptionSelect = (optionValue: string) => {
        setSelectedValue(optionValue);
        setIsOpen(false);
        onChange?.(optionValue);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (disabled) return;

        switch (event.key) {
            case 'Enter':
            case ' ':
                event.preventDefault();
                setIsOpen(!isOpen);
                break;
            case 'Escape':
                setIsOpen(false);
                break;
            case 'ArrowDown':
                event.preventDefault();
                if (!isOpen) {
                    setIsOpen(true);
                } else {
                    // 다음 옵션으로 이동
                    const currentIndex = options.findIndex(opt => opt.value === selectedValue);
                    const nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
                    handleOptionSelect(options[nextIndex].value);
                }
                break;
            case 'ArrowUp':
                event.preventDefault();
                if (!isOpen) {
                    setIsOpen(true);
                } else {
                    // 이전 옵션으로 이동
                    const currentIndex = options.findIndex(opt => opt.value === selectedValue);
                    const prevIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1;
                    handleOptionSelect(options[prevIndex].value);
                }
                break;
        }
    };

    const containerClassName = [
        styles.selectContainer,
        className,
    ].filter(Boolean).join(' ');

    const selectClassName = [
        styles.select,
        styles[`select--${variant}`],
        styles[`select--${size}`],
        disabled && styles['select--disabled'],
        errorMessage && styles['select--error'],
        isOpen && styles['select--open'],
        !selectedValue && styles['select--placeholder'],
    ].filter(Boolean).join(' ');

    return (
        <div className={containerClassName}>
            {label && (
                <label className={styles.label}>
                    {label}
                </label>
            )}

            <div className={styles.selectWrapper} ref={selectRef}>
                <div
                    className={selectClassName}
                    onClick={handleToggle}
                    onKeyDown={handleKeyDown}
                    tabIndex={disabled ? -1 : 0}
                    role="combobox"
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                    aria-controls="selectbox-options"
                    aria-label={label || placeholder}
                >
                    <span className={styles.selectText}>
                        {displayText}
                    </span>
                    <span className={styles.selectArrow}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M7 10L12 15L17 10"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </div>

                {isOpen && !disabled && (
                    <div className={styles.dropdown} role="listbox">
                        {options.map((option) => (
                            <div
                                key={option.value}
                                className={[
                                    styles.option,
                                    option.value === selectedValue && styles['option--selected'],
                                ].filter(Boolean).join(' ')}
                                onClick={() => handleOptionSelect(option.value)}
                                role="option"
                                aria-selected={option.value === selectedValue}
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {errorMessage && (
                <div className={styles.errorMessage}>
                    {errorMessage}
                </div>
            )}
        </div>
    );
};
