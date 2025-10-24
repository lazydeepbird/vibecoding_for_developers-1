'use client';

import React from 'react';
import Image from 'next/image';
import { Selectbox } from '@/commons/components/selectbox';
import Searchbar from '@/commons/components/searchbar';
import { Button } from '@/commons/components/button';
import Pagination from '@/commons/components/pagination';
import { Emotion, EmotionText } from '@/commons/constants/enum';
import styles from './styles.module.css';

/**
 * 일기 목록 컴포넌트
 * 피그마 디자인 기반으로 구현된 레이아웃
 */
const Diaries = () => {
    // 필터 옵션
    // Mock 데이터
    const mockDiaryData = [
        {
            id: 1,
            emotion: Emotion.Sad,
            date: '2024. 03. 12',
            title: '타이틀 영역 입니다. 한줄까지만 노출 됩니다.',
            image: '/images/emotion-sad-m.png'
        },
        {
            id: 2,
            emotion: Emotion.Surprise,
            date: '2024. 03. 12',
            title: '타이틀 영역 입니다.',
            image: '/images/emotion-surprise-m.png'
        },
        {
            id: 3,
            emotion: Emotion.Angry,
            date: '2024. 03. 12',
            title: '타이틀 영역 입니다.',
            image: '/images/emotion-angry-m.png'
        },
        {
            id: 4,
            emotion: Emotion.Happy,
            date: '2024. 03. 12',
            title: '타이틀 영역 입니다.',
            image: '/images/emotion-happy-m.png'
        },
        {
            id: 5,
            emotion: Emotion.Etc,
            date: '2024. 03. 12',
            title: '타이틀 영역 입니다. 한줄까지만 노출 됩니다.',
            image: '/images/emotion-etc-m.png'
        },
        {
            id: 6,
            emotion: Emotion.Surprise,
            date: '2024. 03. 12',
            title: '타이틀 영역 입니다.',
            image: '/images/emotion-surprise-m.png'
        },
        {
            id: 7,
            emotion: Emotion.Angry,
            date: '2024. 03. 12',
            title: '타이틀 영역 입니다.',
            image: '/images/emotion-angry-m.png'
        },
        {
            id: 8,
            emotion: Emotion.Happy,
            date: '2024. 03. 12',
            title: '타이틀 영역 입니다.',
            image: '/images/emotion-happy-m.png'
        },
        {
            id: 9,
            emotion: Emotion.Sad,
            date: '2024. 03. 12',
            title: '타이틀 영역 입니다. 한줄까지만 노출 됩니다.',
            image: '/images/emotion-sad-m.png'
        },
        {
            id: 10,
            emotion: Emotion.Surprise,
            date: '2024. 03. 12',
            title: '타이틀 영역 입니다.',
            image: '/images/emotion-surprise-m.png'
        },
        {
            id: 11,
            emotion: Emotion.Angry,
            date: '2024. 03. 12',
            title: '타이틀 영역 입니다.',
            image: '/images/emotion-angry-m.png'
        },
        {
            id: 12,
            emotion: Emotion.Happy,
            date: '2024. 03. 12',
            title: '타이틀 영역 입니다.',
            image: '/images/emotion-happy-m.png'
        }
    ];

    // 필터 옵션
    const filterOptions = [
        { value: 'all', label: '전체' },
        { value: 'happy', label: '기쁨' },
        { value: 'sad', label: '슬픔' },
        { value: 'angry', label: '화남' },
        { value: 'surprise', label: '놀람' },
        { value: 'etc', label: '기타' }
    ];

    return (
        <div className={styles.container}>
            {/* Gap 1 */}
            <div className={styles.gap1}></div>

            {/* Search 영역 */}
            <div className={styles.searchSection}>
                <div className={styles.searchContent}>
                    {/* 필터 드롭다운 */}
                    <Selectbox
                        variant="primary"
                        size="medium"
                        options={filterOptions}
                        value="all"
                        className={styles.filterSelect}
                    />

                    {/* 검색바 */}
                    <Searchbar
                        placeholder="검색어를 입력해 주세요."
                        size="medium"
                        variant="primary"
                        className={styles.searchInput}
                    />
                </div>

                {/* 일기쓰기 버튼 */}
                <Button
                    variant="primary"
                    size="medium"
                    className={styles.writeButton}
                    icon={
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    }
                >
                    일기쓰기
                </Button>
            </div>

            {/* Gap 2 */}
            <div className={styles.gap2}></div>

            {/* Main 컨텐츠 영역 */}
            <div className={styles.mainSection}>
                <div className={styles.diaryGrid}>
                    {mockDiaryData.map((diary) => (
                        <div key={diary.id} className={styles.diaryCard}>
                            {/* 이미지 영역 */}
                            <div className={styles.cardImageContainer}>
                                <Image
                                    src={diary.image}
                                    alt={EmotionText[diary.emotion]}
                                    width={274}
                                    height={208}
                                    className={styles.cardImage}
                                />
                                {/* 닫기 아이콘 */}
                                <button className={styles.closeButton}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            {/* 텍스트 영역 */}
                            <div className={styles.cardContent}>
                                <div className={styles.cardInfo}>
                                    <span
                                        className={styles.emotionTag}
                                        data-emotion={diary.emotion.toLowerCase()}
                                    >
                                        {EmotionText[diary.emotion]}
                                    </span>
                                    <span className={styles.dateText}>
                                        {diary.date}
                                    </span>
                                </div>
                                <div className={styles.cardTitle}>
                                    {diary.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Gap 3 */}
            <div className={styles.gap3}></div>

            {/* Pagination 영역 */}
            <div className={styles.paginationSection}>
                <Pagination
                    currentPage={1}
                    totalPages={10}
                    pageRange={5}
                    variant="primary"
                    size="medium"
                />
            </div>

            {/* Gap 4 */}
            <div className={styles.gap4}></div>
        </div>
    );
};

export default Diaries;
