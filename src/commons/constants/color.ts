// Color Foundation - 피그마 파운데이션 기반 컬러 토큰
// 다크모드를 포함한 모든 컬러 토큰 정의

export const colors = {
  // Blue 계열
  blue: {
    5: '#F0F7FF',
    10: '#DBEEFF', 
    20: '#BDDBFF',
    30: '#93BEFF',
    40: '#6DA5FA', // System color
    50: '#497CFF',
    60: '#3A5CF3', // System color
    70: '#274AE1',
    80: '#1530A6',
    90: '#0B2184',
  },

  // Gray 계열
  gray: {
    white: '#FFFFFF',
    5: '#F2F2F2',
    10: '#E4E4E4',
    20: '#D4D3D3',
    30: '#C7C7C7',
    40: '#ABABAB',
    50: '#919191',
    60: '#777777',
    70: '#5F5F5F',
    80: '#333333',
    90: '#1C1C1C',
    black: '#000000',
  },

  // Red 계열
  red: {
    5: '#FDD7DC',
    10: '#F797A4',
    20: '#F4677A',
    30: '#F03851', // Error color
    40: '#E4112E',
    50: '#B40E24',
    60: '#850A1B',
  },

  // Green 계열
  green: {
    5: '#D3F3E0',
    10: '#92E6B9',
    20: '#15D66F',
    30: '#12B75F', // Success color
    40: '#109C51',
    50: '#0E723C',
    60: '#084424',
  },

  // Yellow 계열
  yellow: {
    5: '#FFE499',
    10: '#FFD666',
    20: '#FFC933',
    30: '#FFB300',
    40: '#EBA500',
    50: '#D69600',
    60: '#B27D00',
  },

  // Cool Gray 계열
  coolGray: {
    1: '#F8F8FA',
    5: '#F6F6F9',
    10: '#EDEEF2',
    20: '#DDDFE5',
    30: '#D2D4DD',
    40: '#C7C9D5',
    50: '#BBBECD',
    60: '#B0B3C4',
  },

  // Gradient 계열
  gradient: {
    primary: 'linear-gradient(135deg, #6DA5FA 0%, #92EAF5 100%)',
    skeleton: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 48.5%, transparent 100%)',
  },
} as const;

// 시맨틱 컬러 토큰 (용도별 분류)
export const semanticColors = {
  // 시스템 컬러
  system: {
    primary: colors.blue[40], // #6DA5FA
    secondary: colors.blue[60], // #3A5CF3
    success: colors.green[30], // #12B75F
    error: colors.red[30], // #F03851
    warning: colors.yellow[30], // #FFB300
  },

  // 텍스트 컬러
  text: {
    primary: colors.gray.black,
    secondary: colors.gray[60],
    tertiary: colors.gray[40],
    inverse: colors.gray.white,
    disabled: colors.gray[30],
  },

  // 배경 컬러
  background: {
    primary: colors.gray.white,
    secondary: colors.gray[5],
    tertiary: colors.gray[10],
    inverse: colors.gray.black,
    overlay: 'rgba(0, 0, 0, 0.5)',
  },

  // 보더 컬러
  border: {
    primary: colors.gray[20],
    secondary: colors.gray[10],
    focus: colors.blue[40],
    error: colors.red[30],
    success: colors.green[30],
  },

  // 상태별 컬러
  state: {
    hover: colors.gray[5],
    active: colors.gray[10],
    disabled: colors.gray[20],
    selected: colors.blue[5],
  },
} as const;

// 다크모드 컬러 토큰
export const darkColors = {
  // 시맨틱 컬러 (다크모드)
  system: {
    primary: colors.blue[50], // #497CFF
    secondary: colors.blue[40], // #6DA5FA
    success: colors.green[20], // #15D66F
    error: colors.red[20], // #F4677A
    warning: colors.yellow[20], // #FFC933
  },

  // 텍스트 컬러 (다크모드)
  text: {
    primary: colors.gray.white,
    secondary: colors.gray[30],
    tertiary: colors.gray[50],
    inverse: colors.gray.black,
    disabled: colors.gray[60],
  },

  // 배경 컬러 (다크모드)
  background: {
    primary: colors.gray.black,
    secondary: colors.gray[90],
    tertiary: colors.gray[80],
    inverse: colors.gray.white,
    overlay: 'rgba(255, 255, 255, 0.1)',
  },

  // 보더 컬러 (다크모드)
  border: {
    primary: colors.gray[70],
    secondary: colors.gray[80],
    focus: colors.blue[50],
    error: colors.red[20],
    success: colors.green[20],
  },

  // 상태별 컬러 (다크모드)
  state: {
    hover: colors.gray[80],
    active: colors.gray[70],
    disabled: colors.gray[80],
    selected: colors.blue[90],
  },
} as const;

// CSS 변수명 매핑
export const cssVariables = {
  // 라이트 모드 CSS 변수
  light: {
    // 시스템 컬러
    '--color-primary': semanticColors.system.primary,
    '--color-secondary': semanticColors.system.secondary,
    '--color-success': semanticColors.system.success,
    '--color-error': semanticColors.system.error,
    '--color-warning': semanticColors.system.warning,

    // 텍스트 컬러
    '--color-text-primary': semanticColors.text.primary,
    '--color-text-secondary': semanticColors.text.secondary,
    '--color-text-tertiary': semanticColors.text.tertiary,
    '--color-text-inverse': semanticColors.text.inverse,
    '--color-text-disabled': semanticColors.text.disabled,

    // 배경 컬러
    '--color-bg-primary': semanticColors.background.primary,
    '--color-bg-secondary': semanticColors.background.secondary,
    '--color-bg-tertiary': semanticColors.background.tertiary,
    '--color-bg-inverse': semanticColors.background.inverse,
    '--color-bg-overlay': semanticColors.background.overlay,

    // 보더 컬러
    '--color-border-primary': semanticColors.border.primary,
    '--color-border-secondary': semanticColors.border.secondary,
    '--color-border-focus': semanticColors.border.focus,
    '--color-border-error': semanticColors.border.error,
    '--color-border-success': semanticColors.border.success,

    // 상태별 컬러
    '--color-state-hover': semanticColors.state.hover,
    '--color-state-active': semanticColors.state.active,
    '--color-state-disabled': semanticColors.state.disabled,
    '--color-state-selected': semanticColors.state.selected,

    // 그라데이션
    '--gradient-primary': colors.gradient.primary,
    '--gradient-skeleton': colors.gradient.skeleton,
  },

  // 다크 모드 CSS 변수
  dark: {
    // 시스템 컬러
    '--color-primary': darkColors.system.primary,
    '--color-secondary': darkColors.system.secondary,
    '--color-success': darkColors.system.success,
    '--color-error': darkColors.system.error,
    '--color-warning': darkColors.system.warning,

    // 텍스트 컬러
    '--color-text-primary': darkColors.text.primary,
    '--color-text-secondary': darkColors.text.secondary,
    '--color-text-tertiary': darkColors.text.tertiary,
    '--color-text-inverse': darkColors.text.inverse,
    '--color-text-disabled': darkColors.text.disabled,

    // 배경 컬러
    '--color-bg-primary': darkColors.background.primary,
    '--color-bg-secondary': darkColors.background.secondary,
    '--color-bg-tertiary': darkColors.background.tertiary,
    '--color-bg-inverse': darkColors.background.inverse,
    '--color-bg-overlay': darkColors.background.overlay,

    // 보더 컬러
    '--color-border-primary': darkColors.border.primary,
    '--color-border-secondary': darkColors.border.secondary,
    '--color-border-focus': darkColors.border.focus,
    '--color-border-error': darkColors.border.error,
    '--color-border-success': darkColors.border.success,

    // 상태별 컬러
    '--color-state-hover': darkColors.state.hover,
    '--color-state-active': darkColors.state.active,
    '--color-state-disabled': darkColors.state.disabled,
    '--color-state-selected': darkColors.state.selected,

    // 그라데이션
    '--gradient-primary': colors.gradient.primary,
    '--gradient-skeleton': colors.gradient.skeleton,
  },
} as const;

// 타입 정의
export type ColorToken = keyof typeof colors;
export type SemanticColorToken = keyof typeof semanticColors;
export type DarkColorToken = keyof typeof darkColors;
export type CSSVariableToken = keyof typeof cssVariables.light;
