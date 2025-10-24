import React, { ButtonHTMLAttributes } from 'react';
import { useTheme } from 'next-themes';
import styles from './styles.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * 버튼 변형 타입
     * @default 'primary'
     */
    variant?: 'primary' | 'secondary' | 'tertiary';

    /**
     * 버튼 크기
     * @default 'medium'
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 버튼 내부 콘텐츠
     */
    children: React.ReactNode;

    /**
     * 버튼 클래스명 (추가 스타일링용)
     */
    className?: string;

    /**
     * 아이콘 (선택사항)
     */
    icon?: React.ReactNode;
}

/**
 * 기본 버튼 컴포넌트
 * 
 * 다양한 변형과 크기를 지원하는 버튼 컴포넌트입니다.
 * - variant: primary, secondary, tertiary
 * - size: small, medium, large
 * - theme: light, dark (시스템 테마 자동 적용)
 * 
 * 피그마 디자인 참조: 노드 ID 3:1461
 */
export const Button = ({
    variant = 'primary',
    size = 'medium',
    children,
    className = '',
    icon,
    ...props
}: ButtonProps) => {
    // next-themes에서 현재 테마 가져오기
    const { resolvedTheme } = useTheme();
    const theme = resolvedTheme === 'dark' ? 'dark' : 'light';

    // 클래스명 조합
    const buttonClasses = [
        styles.button,
        styles[size],
        styles[theme],
        styles[variant],
        className
    ].join(' ');

    return (
        <button className={buttonClasses} {...props}>
            {icon && <span className={styles.icon}>{icon}</span>}
            {children}
        </button>
    );
};

export default Button;