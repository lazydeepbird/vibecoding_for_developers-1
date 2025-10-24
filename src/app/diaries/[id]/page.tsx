import React from 'react';
import DiariesDetail from '@/components/diaries-detail';

interface DiaryDetailPageProps {
    params: {
        id: string;
    };
}

/**
 * 다이어리 상세 페이지
 */
const DiaryDetailPage: React.FC<DiaryDetailPageProps> = () => {
    return <DiariesDetail />;
};

export default DiaryDetailPage;
