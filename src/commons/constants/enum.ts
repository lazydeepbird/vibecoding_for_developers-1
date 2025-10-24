import { colors } from './color';

/**
 * 감정(emotion) enum 데이터
 */
export enum Emotion {
    Happy = 'Happy',
    Sad = 'Sad',
    Angry = 'Angry',
    Surprise = 'Surprise',
    Etc = 'Etc',
}

/**
 * 감정별 표시 텍스트
 */
export const EmotionText: Record<Emotion, string> = {
    [Emotion.Happy]: '행복해요',
    [Emotion.Sad]: '슬퍼요',
    [Emotion.Angry]: '화나요',
    [Emotion.Surprise]: '놀랐어요',
    [Emotion.Etc]: '기타',
};

/**
 * 감정별 이미지 경로
 */
export const EmotionImage: Record<Emotion, { medium: string; small: string }> = {
    [Emotion.Happy]: {
        medium: 'emotion-happy-m.png',
        small: 'emotion-happy-s.png',
    },
    [Emotion.Sad]: {
        medium: 'emotion-sad-m.png',
        small: 'emotion-sad-s.png',
    },
    [Emotion.Angry]: {
        medium: 'emotion-angry-m.png',
        small: 'emotion-angry-s.png',
    },
    [Emotion.Surprise]: {
        medium: 'emotion-surprise-m.png',
        small: 'emotion-surprise-s.png',
    },
    [Emotion.Etc]: {
        medium: 'emotion-etc-m.png',
        small: 'emotion-etc-s.png',
    },
};

/**
 * 감정별 색상
 */
export const EmotionColor: Record<Emotion, string> = {
    [Emotion.Happy]: colors.red[60],
    [Emotion.Sad]: colors.blue[60],
    [Emotion.Angry]: colors.gray[60],
    [Emotion.Surprise]: colors.yellow[60],
    [Emotion.Etc]: colors.green[60],
};
