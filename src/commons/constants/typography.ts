/**
 * 타이포그래피 토큰
 * 
 * 피그마 파운데이션 기반 타이포그래피 토큰 시스템
 * - 국문: Pretendard 폰트 사용
 * - 영문: SUIT 폰트 사용
 * - 모바일/데스크톱 분기 지원
 */

// 공통 타이포그래피 타입 정의
type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold' | 'extrabold';
type FontFamily = 'pretendard' | 'suit';
type DeviceType = 'mobile' | 'desktop';

// 타이포그래피 스타일 타입 정의
interface TypographyStyle {
  fontFamily: FontFamily;
  fontWeight: FontWeight;
  fontSize: number;
  lineHeight: number;
}

// 타이포그래피 스타일 맵 타입 정의
interface TypographyStyleMap {
  [key: string]: {
    mobile: TypographyStyle;
    desktop: TypographyStyle;
  };
}

// 폰트 웨이트 맵핑
export const FONT_WEIGHT: Record<FontWeight, number> = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
};

// 폰트 패밀리 맵핑
export const FONT_FAMILY: Record<FontFamily, string> = {
  pretendard: 'Pretendard, sans-serif',
  suit: 'SUIT Variable, sans-serif',
};

// 웹 헤드라인 스타일 (국문)
export const WEB_HEADLINE: TypographyStyleMap = {
  headline01: {
    mobile: {
      fontFamily: 'pretendard',
      fontWeight: 'semibold',
      fontSize: 36, // 모바일에서는 더 작은 사이즈
      lineHeight: 48,
    },
    desktop: {
      fontFamily: 'pretendard',
      fontWeight: 'semibold',
      fontSize: 48,
      lineHeight: 60,
    },
  },
  headline02: {
    mobile: {
      fontFamily: 'pretendard',
      fontWeight: 'semibold',
      fontSize: 28,
      lineHeight: 36,
    },
    desktop: {
      fontFamily: 'pretendard',
      fontWeight: 'semibold',
      fontSize: 36,
      lineHeight: 48,
    },
  },
  headline03: {
    mobile: {
      fontFamily: 'pretendard',
      fontWeight: 'semibold',
      fontSize: 22,
      lineHeight: 28,
    },
    desktop: {
      fontFamily: 'pretendard',
      fontWeight: 'semibold',
      fontSize: 28,
      lineHeight: 36,
    },
  },
};

// 헤드라인 스타일 (국문)
export const HEADLINE: TypographyStyleMap = {
  headline01: {
    mobile: {
      fontFamily: 'pretendard',
      fontWeight: 'bold',
      fontSize: 20,
      lineHeight: 28,
    },
    desktop: {
      fontFamily: 'pretendard',
      fontWeight: 'bold',
      fontSize: 24,
      lineHeight: 32,
    },
  },
  headline02: {
    mobile: {
      fontFamily: 'pretendard',
      fontWeight: 'extrabold',
      fontSize: 18,
      lineHeight: 26,
    },
    desktop: {
      fontFamily: 'pretendard',
      fontWeight: 'extrabold',
      fontSize: 22,
      lineHeight: 30,
    },
  },
  headline03: {
    mobile: {
      fontFamily: 'pretendard',
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: 24,
    },
    desktop: {
      fontFamily: 'pretendard',
      fontWeight: 'bold',
      fontSize: 20,
      lineHeight: 28,
    },
  },
};

// 타이틀 스타일 (국문)
export const TITLE: TypographyStyleMap = {
  title01: {
    mobile: {
      fontFamily: 'pretendard',
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: 22,
    },
    desktop: {
      fontFamily: 'pretendard',
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: 24,
    },
  },
  title02: {
    mobile: {
      fontFamily: 'pretendard',
      fontWeight: 'bold',
      fontSize: 14,
      lineHeight: 20,
    },
    desktop: {
      fontFamily: 'pretendard',
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: 22,
    },
  },
  title03: {
    mobile: {
      fontFamily: 'pretendard',
      fontWeight: 'bold',
      fontSize: 12,
      lineHeight: 18,
    },
    desktop: {
      fontFamily: 'pretendard',
      fontWeight: 'bold',
      fontSize: 14,
      lineHeight: 20,
    },
  },
  subtitle01: {
    mobile: {
      fontFamily: 'pretendard',
      fontWeight: 'semibold',
      fontSize: 12,
      lineHeight: 18,
    },
    desktop: {
      fontFamily: 'pretendard',
      fontWeight: 'semibold',
      fontSize: 14,
      lineHeight: 22,
    },
  },
  subtitle02: {
    mobile: {
      fontFamily: 'pretendard',
      fontWeight: 'semibold',
      fontSize: 10,
      lineHeight: 16,
    },
    desktop: {
      fontFamily: 'pretendard',
      fontWeight: 'semibold',
      fontSize: 12,
      lineHeight: 18,
    },
  },
};

// 본문 스타일 (국문)
export const BODY: TypographyStyleMap = {
  body01: {
    mobile: {
      fontFamily: 'pretendard',
      fontWeight: 'medium',
      fontSize: 14,
      lineHeight: 22,
    },
    desktop: {
      fontFamily: 'pretendard',
      fontWeight: 'medium',
      fontSize: 16,
      lineHeight: 24,
    },
  },
  body02_m: {
    mobile: {
      fontFamily: 'pretendard',
      fontWeight: 'medium',
      fontSize: 12,
      lineHeight: 18,
    },
    desktop: {
      fontFamily: 'pretendard',
      fontWeight: 'medium',
      fontSize: 14,
      lineHeight: 22,
    },
  },
  body03: {
    mobile: {
      fontFamily: 'pretendard',
      fontWeight: 'medium',
      fontSize: 10,
      lineHeight: 16,
    },
    desktop: {
      fontFamily: 'pretendard',
      fontWeight: 'medium',
      fontSize: 12,
      lineHeight: 18,
    },
  },
  body01_regular: {
    mobile: {
      fontFamily: 'pretendard',
      fontWeight: 'regular',
      fontSize: 14,
      lineHeight: 20,
    },
    desktop: {
      fontFamily: 'pretendard',
      fontWeight: 'regular',
      fontSize: 16,
      lineHeight: 22,
    },
  },
  body02_s: {
    mobile: {
      fontFamily: 'pretendard',
      fontWeight: 'regular',
      fontSize: 12,
      lineHeight: 18,
    },
    desktop: {
      fontFamily: 'pretendard',
      fontWeight: 'regular',
      fontSize: 14,
      lineHeight: 20,
    },
  },
  body03_regular: {
    mobile: {
      fontFamily: 'pretendard',
      fontWeight: 'regular',
      fontSize: 10,
      lineHeight: 14,
    },
    desktop: {
      fontFamily: 'pretendard',
      fontWeight: 'regular',
      fontSize: 12,
      lineHeight: 16,
    },
  },
};

// 캡션 스타일 (국문)
export const CAPTION: TypographyStyleMap = {
  caption01: {
    mobile: {
      fontFamily: 'pretendard',
      fontWeight: 'semibold',
      fontSize: 10,
      lineHeight: 12,
    },
    desktop: {
      fontFamily: 'pretendard',
      fontWeight: 'semibold',
      fontSize: 12,
      lineHeight: 14,
    },
  },
  caption02_m: {
    mobile: {
      fontFamily: 'pretendard',
      fontWeight: 'semibold',
      fontSize: 8,
      lineHeight: 10,
    },
    desktop: {
      fontFamily: 'pretendard',
      fontWeight: 'semibold',
      fontSize: 10,
      lineHeight: 12,
    },
  },
  caption02_s: {
    mobile: {
      fontFamily: 'pretendard',
      fontWeight: 'medium',
      fontSize: 8,
      lineHeight: 10,
    },
    desktop: {
      fontFamily: 'pretendard',
      fontWeight: 'medium',
      fontSize: 10,
      lineHeight: 12,
    },
  },
  caption03: {
    mobile: {
      fontFamily: 'pretendard',
      fontWeight: 'semibold',
      fontSize: 6,
      lineHeight: 8,
    },
    desktop: {
      fontFamily: 'pretendard',
      fontWeight: 'semibold',
      fontSize: 8,
      lineHeight: 10,
    },
  },
};

// 영문 타이포그래피 (SUIT 폰트 사용)
export const EN_TYPOGRAPHY: TypographyStyleMap = {
  // 영문 웹 헤드라인
  en_headline01: {
    mobile: {
      ...WEB_HEADLINE.headline01.mobile,
      fontFamily: 'suit',
    },
    desktop: {
      ...WEB_HEADLINE.headline01.desktop,
      fontFamily: 'suit',
    },
  },
  en_headline02: {
    mobile: {
      ...WEB_HEADLINE.headline02.mobile,
      fontFamily: 'suit',
    },
    desktop: {
      ...WEB_HEADLINE.headline02.desktop,
      fontFamily: 'suit',
    },
  },
  // 영문 본문
  en_body01: {
    mobile: {
      ...BODY.body01.mobile,
      fontFamily: 'suit',
    },
    desktop: {
      ...BODY.body01.desktop,
      fontFamily: 'suit',
    },
  },
  en_body02: {
    mobile: {
      ...BODY.body02_m.mobile,
      fontFamily: 'suit',
    },
    desktop: {
      ...BODY.body02_m.desktop,
      fontFamily: 'suit',
    },
  },
};

// 타이포그래피 유틸리티 함수
export const getTypographyStyle = (
  category: 'web_headline' | 'headline' | 'title' | 'body' | 'caption' | 'en',
  variant: string,
  device: DeviceType = 'desktop'
): TypographyStyle => {
  const map = {
    web_headline: WEB_HEADLINE,
    headline: HEADLINE,
    title: TITLE,
    body: BODY,
    caption: CAPTION,
    en: EN_TYPOGRAPHY,
  };

  const styleMap = map[category];
  const style = styleMap[variant];

  if (!style) {
    console.warn(`Typography style not found: ${category}.${variant}`);
    // 기본값 반환
    return {
      fontFamily: 'pretendard',
      fontWeight: 'regular',
      fontSize: 16,
      lineHeight: 24,
    };
  }

  return style[device];
};

// CSS 변수 이름 생성 유틸리티
export const getTypographyCSSVarName = (
  category: string,
  variant: string,
  property: 'family' | 'weight' | 'size' | 'lineHeight',
  device: DeviceType = 'desktop'
): string => {
  return `--typography-${category}-${variant}-${property}-${device}`;
};
