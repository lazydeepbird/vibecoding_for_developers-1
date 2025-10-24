'use client';

import { useState } from 'react';
import { Button } from '@/commons/components/button';
import { Input } from '@/commons/components/input';
import { Emotion, EmotionText } from '@/commons/constants/enum';
import styles from './styles.module.css';

export default function DiariesNew() {
    const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = () => {
        if (!selectedEmotion || !title.trim() || !content.trim()) {
            alert('모든 항목을 입력해주세요.');
            return;
        }

        console.log('일기 저장:', {
            emotion: selectedEmotion,
            title: title.trim(),
            content: content.trim(),
            createdAt: new Date()
        });

        alert('일기가 성공적으로 저장되었습니다!');
    };

    const handleClose = () => {
        // 모달 닫기 로직
        console.log('모달 닫기');
    };

    return (
        <div className={styles.wrapper}>
            {/* Header 영역 */}
            <div className={styles.header}>
                <h1 className={styles.headerTitle}>일기 쓰기</h1>
            </div>

            {/* Emotion Box 영역 */}
            <div className={styles.emotionBox}>
                <p className={styles.emotionQuestion}>오늘 기분은 어땠나요?</p>
                <div className={styles.emotionRadioGroup}>
                    {Object.values(Emotion).map((emotion) => (
                        <label key={emotion} className={styles.emotionRadioItem}>
                            <input
                                type="radio"
                                name="emotion"
                                value={emotion}
                                checked={selectedEmotion === emotion}
                                onChange={() => setSelectedEmotion(emotion)}
                                className={styles.emotionRadioInput}
                            />
                            <span className={styles.emotionRadioText}>
                                {EmotionText[emotion]}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Input Title 영역 */}
            <div className={styles.inputTitle}>
                <Input
                    label="제목"
                    placeholder="제목을 입력합니다."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    variant="primary"
                    size="medium"
                />
            </div>

            {/* Input Content 영역 */}
            <div className={styles.inputContent}>
                <label className={styles.contentLabel}>내용</label>
                <textarea
                    placeholder="내용을 입력합니다."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className={styles.contentTextarea}
                />
            </div>

            {/* Footer 영역 */}
            <div className={styles.footer}>
                <Button
                    variant="secondary"
                    size="large"
                    onClick={handleClose}
                    className={styles.cancelButton}
                >
                    닫기
                </Button>
                <Button
                    variant="primary"
                    size="large"
                    onClick={handleSubmit}
                    className={styles.submitButton}
                >
                    등록하기
                </Button>
            </div>
        </div>
    );
}
