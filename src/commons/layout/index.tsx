import { ReactNode } from 'react';
import styles from './styles.module.css';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className={styles.container}>
            {/* Header */}
            <header className={styles.header}>
                <div className={styles.logo}>
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
                    <div className={`${styles.tab} ${styles.tabActive}`}>
                        <span className={styles.tabText}>일기보관함</span>
                    </div>
                    <div className={styles.tab}>
                        <span className={styles.tabTextInactive}>사진보관함</span>
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
}
