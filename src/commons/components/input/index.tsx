import React, { InputHTMLAttributes } from 'react';
import { useTheme } from 'next-themes';
import styles from './styles.module.css';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /**
     * 인풋 변형 타입
     * @default 'primary'
     */
    variant?: 'primary' | 'secondary' | 'tertiary';

    /**
     * 인풋 크기
     * @default 'medium'
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 인풋 라벨 (옵션)
     */
    label?: string;

    /**
     * 인풋 에러 메시지 (옵션)
     */
    errorMessage?: string;

    /**
     * 인풋 클래스명 (추가 스타일링용)
     */
    className?: string;
}

/**
 * 기본 인풋 컴포넌트
 * 
 * 다양한 변형과 크기를 지원하는 인풋 컴포넌트입니다.
 * - variant: primary, secondary, tertiary
 * - size: small, medium, large
 * - theme: light, dark (시스템 테마 자동 적용)
 */
export const Input = ({
    variant = 'primary',
    size = 'medium',
    label,
    errorMessage,
    className = '',
    placeholder = '회고를 남겨보세요.',
    id,
    ...props
}: InputProps) => {
    // next-themes에서 현재 테마 가져오기
    const { resolvedTheme } = useTheme();
    const theme = resolvedTheme === 'dark' ? 'dark' : 'light';

    // 고유 ID 생성 (라벨 연결용)
    const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;

    // 클래스명 조합
    const inputClasses = [
        styles.input,
        styles[size],
        styles[theme],
        styles[variant],
        errorMessage ? styles.error : '',
        className
    ].join(' ');

    const wrapperClasses = [
        styles.wrapper,
        styles[`${size}Wrapper`]
    ].join(' ');

    return (
        <div className={wrapperClasses}>
            {label && (
                <label htmlFor={inputId} className={styles.label}>
                    {label}
                </label>
            )}
            <input
                id={inputId}
                className={inputClasses}
                placeholder={placeholder}
                {...props}
            />
            {errorMessage && (
                <p className={styles.errorMessage}>{errorMessage}</p>
            )}
        </div>
    );
};

export default Input;