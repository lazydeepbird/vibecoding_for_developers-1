'use client';

import React, { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { useLinkRouting } from './hooks/index.link.routing.hook';
import styles from './styles.module.css';

interface LayoutProps {
    /**
     * 레이아웃 내부에 렌더링될 자식 컴포넌트
     */
    children: ReactNode;
}

/**
 * 공통 레이아웃 컴포넌트
 * 
 * 애플리케이션의 기본 레이아웃을 제공합니다.
 * - 헤더: 로고 및 네비게이션
 * - 배너: 메인 배너 이미지
 * - 네비게이션: 일기보관함/사진보관함 탭
 * - 메인: 페이지별 콘텐츠 영역
 * - 푸터: 저작권 정보
 * 
 * @param {LayoutProps} props - 레이아웃 컴포넌트 props
 * @returns {JSX.Element} 레이아웃 컴포넌트
 */
const Layout = ({ children }: LayoutProps) => {
    const router = useRouter();
    const { isDiariesActive, isPicturesActive, diariesPath, picturesPath } = useLinkRouting();

    // 로고 클릭 핸들러
    const handleLogoClick = () => {
        router.push(diariesPath);
    };

    // 일기보관함 클릭 핸들러
    const handleDiariesClick = () => {
        router.push(diariesPath);
    };

    // 사진보관함 클릭 핸들러
    const handlePicturesClick = () => {
        router.push(picturesPath);
    };

    return (
        <div className={styles.container}>
            {/* Header */}
            <header className={styles.header}>
                <div className={styles.logo} onClick={handleLogoClick} data-testid="logo">
                    <span className={styles.logoText}>민지의 다이어리</span>
                </div>
                <div className={styles.spacer}></div>
            </header>

            <div className={styles.gap}></div>

            {/* Banner */}
            <div className={styles.banner}>
                <div className={styles.bannerImage}></div>
            </div>

            <div className={styles.gap}></div>

            {/* Navigation */}
            <nav className={styles.navigation}>
                <div className={styles.navigationTabs}>
                    <div
                        className={`${styles.tab} ${isDiariesActive ? styles.tabActive : ''}`}
                        onClick={handleDiariesClick}
                        data-testid="diaries-tab"
                    >
                        <span className={isDiariesActive ? styles.tabText : styles.tabTextInactive}>
                            일기보관함
                        </span>
                    </div>
                    <div
                        className={`${styles.tab} ${isPicturesActive ? styles.tabActive : ''}`}
                        onClick={handlePicturesClick}
                        data-testid="pictures-tab"
                    >
                        <span className={isPicturesActive ? styles.tabText : styles.tabTextInactive}>
                            사진보관함
                        </span>
                    </div>
                </div>
            </nav>

            <main className={styles.main}>
                {children}
            </main>

            {/* Footer */}
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerTitle}>민지의 다이어리</div>
                    <div className={styles.footerInfo}>
                        <div className={styles.footerCompany}>대표 : {'{name}'}</div>
                        <div className={styles.footerCopyright}>Copyright © 2024. {'{name}'} Co., Ltd.</div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
