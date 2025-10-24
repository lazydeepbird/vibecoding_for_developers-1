'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/commons/components/button';
import { Input } from '@/commons/components/input';
import { Emotion, EmotionText, EmotionImage } from '@/commons/constants/enum';
import styles from './styles.module.css';

// Mock 데이터
const mockDiaryData = {
    id: 1,
    title: '이것은 타이틀 입니다.',
    emotion: Emotion.Happy,
    content: '내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다',
    createdAt: '2024. 07. 12'
};

// 회고 타입 정의
interface Retrospect {
    id: number;
    content: string;
    createdAt: string;
}

// Mock 회고 데이터
const mockRetrospectData: Retrospect[] = [
    {
        id: 1,
        content: '3년이 지나고 다시 보니 이때가 그립다.',
        createdAt: '2024. 09. 24'
    },
    {
        id: 2,
        content: '3년이 지나고 다시 보니 이때가 그립다.',
        createdAt: '2024. 09. 24'
    }
];

/**
 * 다이어리 상세 페이지 컴포넌트
 * Figma 디자인을 기반으로 구현된 일기 상세 보기 컴포넌트
 */
const DiariesDetail: React.FC = () => {
    // 회고 관련 state
    const [retrospects, setRetrospects] = useState<Retrospect[]>(mockRetrospectData);
    const [retrospectInput, setRetrospectInput] = useState('');

    // 내용 복사 핸들러
    const handleCopyContent = async () => {
        try {
            await navigator.clipboard.writeText(mockDiaryData.content);
            alert('내용이 복사되었습니다.');
        } catch (err) {
            console.error('복사 실패:', err);
        }
    };

    // 수정 핸들러
    const handleEdit = () => {
        console.log('수정 버튼 클릭');
    };

    // 삭제 핸들러
    const handleDelete = () => {
        console.log('삭제 버튼 클릭');
    };

    // 회고 추가 핸들러
    const handleAddRetrospect = () => {
        if (retrospectInput.trim() === '') {
            alert('회고 내용을 입력해주세요.');
            return;
        }

        const newRetrospect: Retrospect = {
            id: Date.now(),
            content: retrospectInput.trim(),
            createdAt: new Date().toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            }).replace(/\./g, '.').replace(/\s/g, ' ')
        };

        setRetrospects([...retrospects, newRetrospect]);
        setRetrospectInput('');
    };

    // 회고 입력 핸들러
    const handleRetrospectInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRetrospectInput(e.target.value);
    };

    return (
        <div className={styles.container}>
            {/* 상단 간격 */}
            <div className={styles.gapLarge}></div>

            {/* 상세 제목 영역 */}
            <div className={styles.detailTitle}>
                {/* 타이틀 */}
                <div className={styles.titleSection}>
                    <h1 className={styles.titleText}>{mockDiaryData.title}</h1>
                </div>

                {/* 감정&날짜 */}
                <div className={styles.emotionDateSection}>
                    {/* 감정 영역 */}
                    <div className={styles.emotionArea}>
                        <div className={styles.emotionIcon}>
                            <Image
                                src={`/images/${EmotionImage[mockDiaryData.emotion].small}`}
                                alt={EmotionText[mockDiaryData.emotion]}
                                width={32}
                                height={32}
                            />
                        </div>
                        <span className={styles.emotionText}>
                            {EmotionText[mockDiaryData.emotion]}
                        </span>
                    </div>

                    {/* 날짜 영역 */}
                    <div className={styles.dateArea}>
                        <span className={styles.dateText}>{mockDiaryData.createdAt}</span>
                        <span className={styles.dateLabel}>작성</span>
                    </div>
                </div>
            </div>

            {/* 중간 간격 */}
            <div className={styles.gapMedium}></div>

            {/* 상세 내용 영역 */}
            <div className={styles.detailContent}>
                {/* 내용 영역 */}
                <div className={styles.contentArea}>
                    <div className={styles.contentLabel}>내용</div>
                    <div className={styles.contentText}>{mockDiaryData.content}</div>
                </div>

                {/* 복사 버튼 영역 */}
                <div className={styles.copyArea}>
                    <button className={styles.copyButton} onClick={handleCopyContent}>
                        <Image
                            src="/icons/copy_outline_light_m.svg"
                            alt="복사"
                            width={24}
                            height={24}
                        />
                        <span className={styles.copyText}>내용 복사</span>
                    </button>
                </div>
            </div>

            {/* 중간 간격 */}
            <div className={styles.gapMedium}></div>

            {/* 상세 푸터 영역 */}
            <div className={styles.detailFooter}>
                <Button
                    variant="secondary"
                    size="medium"
                    onClick={handleEdit}
                    className={styles.actionButton}
                >
                    수정
                </Button>
                <Button
                    variant="secondary"
                    size="medium"
                    onClick={handleDelete}
                    className={styles.actionButton}
                >
                    삭제
                </Button>
            </div>

            {/* 중간 간격 */}
            <div className={styles.gapMedium}></div>

            {/* 회고 입력 영역 */}
            <div className={styles.retrospectInput}>
                {/* 회고 라벨 */}
                <div className={styles.retrospectLabel}>회고</div>

                {/* 입력 프레임 */}
                <div className={styles.retrospectInputFrame}>
                    <div className={styles.retrospectInputField}>
                        <Input
                            variant="primary"
                            size="large"
                            placeholder="회고를 남겨보세요."
                            value={retrospectInput}
                            onChange={handleRetrospectInputChange}
                            className={styles.retrospectInputElement}
                        />
                    </div>
                    <Button
                        variant="primary"
                        size="medium"
                        onClick={handleAddRetrospect}
                        className={styles.retrospectSubmitButton}
                    >
                        입력
                    </Button>
                </div>
            </div>

            {/* 작은 간격 */}
            <div className={styles.gapSmall}></div>

            {/* 회고 목록 영역 */}
            <div className={styles.retrospectList}>
                {retrospects.map((retrospect, index) => (
                    <div key={retrospect.id}>
                        <div className={styles.retrospectItem}>
                            <span className={styles.retrospectContent}>
                                {retrospect.content}
                            </span>
                            <span className={styles.retrospectDate}>
                                [{retrospect.createdAt}]
                            </span>
                        </div>
                        {index < retrospects.length - 1 && (
                            <div className={styles.retrospectDivider}></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DiariesDetail;
