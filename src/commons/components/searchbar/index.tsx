'use client';

import React, { forwardRef, InputHTMLAttributes } from 'react';
import styles from './styles.module.css';

interface SearchbarProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large';
    theme?: 'light' | 'dark';
    placeholder?: string;
    onSearch?: (value: string) => void;
    className?: string;
}

const Searchbar = forwardRef<HTMLInputElement, SearchbarProps>(({
    variant = 'primary',
    size = 'medium',
    theme = 'light',
    placeholder = '검색어를 입력해 주세요.',
    onSearch,
    className = '',
    onChange,
    onKeyDown,
    ...props
}, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearch?.(e.currentTarget.value);
        }
        onKeyDown?.(e);
    };

    const handleSearchClick = () => {
        if (ref && 'current' in ref && ref.current) {
            onSearch?.(ref.current.value);
        }
    };

    const containerClasses = [
        styles.searchbar,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        styles[`theme-${theme}`],
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={containerClasses}>
            <button
                type="button"
                className={styles.searchIcon}
                onClick={handleSearchClick}
                aria-label="검색"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                        fill="currentColor"
                    />
                </svg>
            </button>
            <input
                ref={ref}
                type="text"
                className={styles.input}
                placeholder={placeholder}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                {...props}
            />
        </div>
    );
});

Searchbar.displayName = 'Searchbar';

export default Searchbar;
