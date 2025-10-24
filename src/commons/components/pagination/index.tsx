import React from 'react';
import { useTheme } from 'next-themes';
import styles from './styles.module.css';

export interface PaginationProps {
    /**
     * 현재 페이지 번호
     * @default 1
     */
    currentPage?: number;

    /**
     * 총 페이지 수
     * @default 1
     */
    totalPages?: number;

    /**
     * 한 번에 표시할 페이지 버튼 수
     * @default 5
     */
    pageRange?: number;

    /**
     * 페이지 변경 핸들러
     */
    onPageChange?: (page: number) => void;

    /**
     * 변형 타입
     * @default 'primary'
     */
    variant?: 'primary' | 'secondary' | 'tertiary';

    /**
     * 크기
     * @default 'medium'
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 추가 클래스명
     */
    className?: string;
}

/**
 * 페이지네이션 컴포넌트
 * 
 * 다양한 변형과 크기를 지원하는 페이지네이션 컴포넌트입니다.
 * - variant: primary, secondary, tertiary
 * - size: small, medium, large
 * - theme: light, dark (시스템 테마 자동 적용)
 * 
 * 피그마 디자인 참조: 노드 ID 3:1693
 */
export const Pagination = ({
    currentPage = 1,
    totalPages = 1,
    pageRange = 5,
    onPageChange,
    variant = 'primary',
    size = 'medium',
    className = '',
}: PaginationProps) => {
    // next-themes에서 현재 테마 가져오기
    const { resolvedTheme } = useTheme();
    const theme = resolvedTheme === 'dark' ? 'dark' : 'light';

    // 클래스명 조합
    const paginationClasses = [
        styles.pagination,
        styles[size],
        styles[theme],
        styles[variant],
        className
    ].join(' ');

    // 페이지 버튼 범위 계산
    const getPageRange = () => {
        const halfRange = Math.floor(pageRange / 2);
        let start = currentPage - halfRange;
        let end = currentPage + halfRange;

        if (start < 1) {
            end += (1 - start);
            start = 1;
        }

        if (end > totalPages) {
            start -= (end - totalPages);
            end = totalPages;
        }

        if (start < 1) start = 1;

        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    // 페이지 변경 핸들러
    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages || page === currentPage) return;
        onPageChange?.(page);
    };

    // 페이지 버튼 렌더링
    const renderPageButtons = () => {
        const pages = getPageRange();

        return pages.map((page) => {
            const isActive = page === currentPage;
            const pageButtonClasses = [
                styles.pageButton,
                isActive ? styles.active : ''
            ].join(' ');

            return (
                <button
                    key={page}
                    className={pageButtonClasses}
                    onClick={() => handlePageChange(page)}
                    aria-current={isActive ? 'page' : undefined}
                    aria-label={`페이지 ${page}`}
                >
                    {page}
                </button>
            );
        });
    };

    return (
        <nav className={paginationClasses} aria-label="페이지네이션">
            <button
                className={`${styles.navButton} ${styles.prev}`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage <= 1}
                aria-label="이전 페이지"
            >
                <span className={styles.arrowIcon}>
                    {/* 이전 페이지 아이콘 */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </button>

            <div className={styles.pageButtonsContainer}>
                {renderPageButtons()}
            </div>

            <button
                className={`${styles.navButton} ${styles.next}`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
                aria-label="다음 페이지"
            >
                <span className={styles.arrowIcon}>
                    {/* 다음 페이지 아이콘 */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </button>
        </nav>
    );
};

export default Pagination;
