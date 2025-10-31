'use client';

import { usePathname } from 'next/navigation';
import { ROUTES } from '../../constants/url';

/**
 * 현재 경로에 따른 네비게이션 활성 상태를 관리하는 커스텀 훅
 * 
 * 현재 URL 경로를 기반으로 네비게이션 탭의 활성 상태를 결정합니다.
 * - 일기 관련 페이지(/diaries, /diaries/[id])에서 일기보관함 탭 활성화
 * - 사진 관련 페이지(/pictures)에서 사진보관함 탭 활성화
 * 
 * @returns {Object} 네비게이션 상태 객체
 * @returns {boolean} isDiariesActive - 일기보관함 탭 활성 상태
 * @returns {boolean} isPicturesActive - 사진보관함 탭 활성 상태  
 * @returns {string} diariesPath - 일기 목록 페이지 경로
 * @returns {string} picturesPath - 사진 목록 페이지 경로
 */
export const useLinkRouting = () => {
    const pathname = usePathname();

    // 현재 경로가 일기 관련 페이지인지 확인
    const isDiariesActive = pathname === ROUTES.DIARIES.LIST.path || pathname.startsWith('/diaries/');

    // 현재 경로가 사진 관련 페이지인지 확인
    const isPicturesActive = pathname === ROUTES.PICTURES.LIST.path;

    return {
        isDiariesActive,
        isPicturesActive,
        diariesPath: ROUTES.DIARIES.LIST.path,
        picturesPath: ROUTES.PICTURES.LIST.path,
    };
};
