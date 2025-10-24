/**
 * 접근 가능 상태 타입
 */
export enum AccessStatus {
    Public = 'Public', // 누구나
    MembersOnly = 'MembersOnly', // 회원전용
}

/**
 * UI 요소 노출 설정 타입
 */
export interface UIVisibility {
    header: boolean;
    headerLogo: boolean;
    headerDarkModeToggle: boolean;
    banner: boolean;
    navigation: boolean;
    footer: boolean;
}

/**
 * URL 경로 정보 타입
 */
export interface RouteInfo {
    path: string;
    accessStatus: AccessStatus;
    uiVisibility: UIVisibility;
}

/**
 * 모든 URL 경로 정보
 */
export const ROUTES = {
    // 인증 관련 경로
    AUTH: {
        LOGIN: {
            path: '/auth/login',
            accessStatus: AccessStatus.Public,
            uiVisibility: {
                header: false,
                headerLogo: false,
                headerDarkModeToggle: false,
                banner: false,
                navigation: false,
                footer: false,
            },
        } as RouteInfo,
        SIGNUP: {
            path: '/auth/signup',
            accessStatus: AccessStatus.Public,
            uiVisibility: {
                header: false,
                headerLogo: false,
                headerDarkModeToggle: false,
                banner: false,
                navigation: false,
                footer: false,
            },
        } as RouteInfo,
    },

    // 일기 관련 경로
    DIARIES: {
        LIST: {
            path: '/diaries',
            accessStatus: AccessStatus.Public,
            uiVisibility: {
                header: true,
                headerLogo: true,
                headerDarkModeToggle: false,
                banner: true,
                navigation: true,
                footer: true,
            },
        } as RouteInfo,
        DETAIL: {
            path: '/diaries/[id]',
            accessStatus: AccessStatus.MembersOnly,
            uiVisibility: {
                header: true,
                headerLogo: true,
                headerDarkModeToggle: false,
                banner: false,
                navigation: false,
                footer: true,
            },
        } as RouteInfo,
    },

    // 사진 관련 경로
    PICTURES: {
        LIST: {
            path: '/pictures',
            accessStatus: AccessStatus.Public,
            uiVisibility: {
                header: true,
                headerLogo: true,
                headerDarkModeToggle: false,
                banner: true,
                navigation: true,
                footer: true,
            },
        } as RouteInfo,
    },
};

/**
 * 동적 경로 생성 헬퍼 함수
 * @param route 기본 경로 정보
 * @param params 동적 파라미터 객체
 * @returns 완성된 경로 문자열
 */
export const generateDynamicPath = (route: RouteInfo, params: Record<string, string | number>): string => {
    let path = route.path;

    // 동적 파라미터 치환
    Object.entries(params).forEach(([key, value]) => {
        path = path.replace(`[${key}]`, String(value));
    });

    return path;
};

/**
 * 일기 상세 페이지 URL 생성 함수
 * @param id 일기 ID
 * @returns 일기 상세 페이지 URL
 */
export const getDiaryDetailUrl = (id: string | number): string => {
    return generateDynamicPath(ROUTES.DIARIES.DETAIL, { id });
};