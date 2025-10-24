'use client';

import React, { useState, useCallback } from 'react';
import styles from './styles.module.css';

export interface ToggleProps {
  /** 토글 상태 (제어 컴포넌트) */
  checked?: boolean;
  /** 기본 토글 상태 (비제어 컴포넌트) */
  defaultChecked?: boolean;
  /** 토글 상태 변경 시 호출되는 콜백 */
  onChange?: (checked: boolean) => void;
  /** 토글 비활성화 여부 */
  disabled?: boolean;
  /** 토글 variant */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /** 토글 크기 */
  size?: 'small' | 'medium' | 'large';
  /** 토글 테마 */
  theme?: 'light' | 'dark';
  /** 접근성을 위한 라벨 */
  'aria-label'?: string;
  /** 접근성을 위한 설명 ID */
  'aria-describedby'?: string;
  /** 커스텀 클래스명 */
  className?: string;
}

export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      checked,
      defaultChecked = false,
      onChange,
      disabled = false,
      variant = 'primary',
      size = 'medium',
      theme = 'light',
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedby,
      className,
      ...props
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    
    // 제어/비제어 컴포넌트 처리
    const isControlled = checked !== undefined;
    const isChecked = isControlled ? checked : internalChecked;

    const handleToggle = useCallback(() => {
      if (disabled) return;

      const newChecked = !isChecked;
      
      if (!isControlled) {
        setInternalChecked(newChecked);
      }
      
      onChange?.(newChecked);
    }, [disabled, isChecked, isControlled, onChange]);

    const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
      if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        handleToggle();
      }
    }, [handleToggle]);

    // 클래스명 조합
    const toggleClasses = [
      styles.toggle,
      styles[`toggle--${variant}`],
      styles[`toggle--${size}`],
      styles[`toggle--${theme}`],
      isChecked && styles['toggle--checked'],
      disabled && styles['toggle--disabled'],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const handleClasses = [
      styles.handle,
      styles[`handle--${variant}`],
      styles[`handle--${size}`],
      styles[`handle--${theme}`],
      isChecked && styles['handle--checked'],
      disabled && styles['handle--disabled'],
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={isChecked}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedby}
        disabled={disabled}
        className={toggleClasses}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        {...props}
      >
        <span className={handleClasses} />
      </button>
    );
  }
);

Toggle.displayName = 'Toggle';

export default Toggle;
