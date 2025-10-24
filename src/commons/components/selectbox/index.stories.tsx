import type { Meta, StoryObj } from '@storybook/nextjs';
import { Selectbox } from './index';

const meta: Meta<typeof Selectbox> = {
    title: 'Commons/Components/Selectbox',
    component: Selectbox,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '키보드 네비게이션, 접근성, 그리고 완전한 variant 시스템을 지원하는 셀렉트박스 컴포넌트입니다. primary/secondary/tertiary variant와 small/medium/large 크기, light/dark 테마를 지원합니다.',
            },
        },
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'tertiary'],
            description: '셀렉트박스의 변형 타입 (primary, secondary, tertiary)',
            table: {
                defaultValue: { summary: 'primary' },
            },
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: '셀렉트박스의 크기 (small: 36px, medium: 48px, large: 56px)',
            table: {
                defaultValue: { summary: 'medium' },
            },
        },
        options: {
            control: 'object',
            description: '선택 옵션 배열 (SelectOption[])',
            table: {
                type: { summary: 'SelectOption[]' },
            },
        },
        value: {
            control: 'text',
            description: '현재 선택된 값',
            table: {
                defaultValue: { summary: '""' },
            },
        },
        placeholder: {
            control: 'text',
            description: '플레이스홀더 텍스트',
            table: {
                defaultValue: { summary: '"선택하세요"' },
            },
        },
        label: {
            control: 'text',
            description: '셀렉트박스 라벨 (선택사항)',
        },
        errorMessage: {
            control: 'text',
            description: '에러 메시지 (선택사항)',
        },
        disabled: {
            control: 'boolean',
            description: '셀렉트박스 비활성화 상태',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
        className: {
            control: 'text',
            description: '추가 CSS 클래스명',
        },
        onChange: {
            action: 'changed',
            description: '값 변경 시 호출되는 콜백 함수',
            table: {
                type: { summary: '(value: string) => void' },
            },
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 옵션 데이터
const defaultOptions = [
    { value: 'apple', label: '사과' },
    { value: 'banana', label: '바나나' },
    { value: 'orange', label: '오렌지' },
    { value: 'grape', label: '포도' },
];

const countryOptions = [
    { value: 'korea', label: '대한민국' },
    { value: 'japan', label: '일본' },
    { value: 'china', label: '중국' },
    { value: 'usa', label: '미국' },
    { value: 'uk', label: '영국' },
];

// 기본 스토리
export const Default: Story = {
    args: {
        options: defaultOptions,
        placeholder: '옵션을 선택하세요',
    },
};

// Variant별 스토리
export const Primary: Story = {
    args: {
        variant: 'primary',
        options: defaultOptions,
        placeholder: 'Primary 셀렉트박스',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        options: defaultOptions,
        placeholder: 'Secondary 셀렉트박스',
    },
};

export const Tertiary: Story = {
    args: {
        variant: 'tertiary',
        options: defaultOptions,
        placeholder: 'Tertiary 셀렉트박스',
    },
};

// Size별 스토리
export const Small: Story = {
    args: {
        size: 'small',
        options: defaultOptions,
        placeholder: 'Small 셀렉트박스',
    },
};

export const Medium: Story = {
    args: {
        size: 'medium',
        options: defaultOptions,
        placeholder: 'Medium 셀렉트박스',
    },
};

export const Large: Story = {
    args: {
        size: 'large',
        options: defaultOptions,
        placeholder: 'Large 셀렉트박스',
    },
};

// 라벨이 있는 셀렉트박스
export const WithLabel: Story = {
    args: {
        label: '좋아하는 과일',
        options: defaultOptions,
        placeholder: '과일을 선택하세요',
    },
};

// 기본값이 선택된 상태
export const WithValue: Story = {
    args: {
        label: '국가 선택',
        options: countryOptions,
        value: 'korea',
    },
};

// 에러 상태 셀렉트박스
export const WithError: Story = {
    args: {
        label: '필수 선택 항목',
        options: defaultOptions,
        placeholder: '반드시 선택해주세요',
        errorMessage: '이 항목은 필수 선택 사항입니다.',
    },
};

// 비활성화된 셀렉트박스
export const Disabled: Story = {
    args: {
        options: defaultOptions,
        placeholder: '비활성화된 셀렉트박스',
        disabled: true,
    },
};

// 비활성화된 상태에서 값이 선택된 경우
export const DisabledWithValue: Story = {
    args: {
        label: '선택 완료',
        options: defaultOptions,
        value: 'apple',
        disabled: true,
    },
};

// 모든 variant를 한번에 보여주는 스토리
export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
            <Selectbox variant="primary" options={defaultOptions} placeholder="Primary" />
            <Selectbox variant="secondary" options={defaultOptions} placeholder="Secondary" />
            <Selectbox variant="tertiary" options={defaultOptions} placeholder="Tertiary" />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: '모든 셀렉트박스 variant를 한번에 확인할 수 있습니다.',
            },
        },
    },
};

// 모든 크기를 한번에 보여주는 스토리  
export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
            <Selectbox size="small" options={defaultOptions} placeholder="Small" />
            <Selectbox size="medium" options={defaultOptions} placeholder="Medium" />
            <Selectbox size="large" options={defaultOptions} placeholder="Large" />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: '모든 셀렉트박스 크기를 한번에 확인할 수 있습니다.',
            },
        },
    },
};

// 다양한 옵션 개수
export const VariousOptionsCount: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
            <Selectbox
                label="적은 옵션 (2개)"
                options={[
                    { value: 'yes', label: '예' },
                    { value: 'no', label: '아니오' },
                ]}
                placeholder="선택하세요"
            />
            <Selectbox
                label="보통 옵션 (4개)"
                options={defaultOptions}
                placeholder="과일을 선택하세요"
            />
            <Selectbox
                label="많은 옵션 (10개)"
                options={[
                    { value: 'option1', label: '옵션 1' },
                    { value: 'option2', label: '옵션 2' },
                    { value: 'option3', label: '옵션 3' },
                    { value: 'option4', label: '옵션 4' },
                    { value: 'option5', label: '옵션 5' },
                    { value: 'option6', label: '옵션 6' },
                    { value: 'option7', label: '옵션 7' },
                    { value: 'option8', label: '옵션 8' },
                    { value: 'option9', label: '옵션 9' },
                    { value: 'option10', label: '옵션 10' },
                ]}
                placeholder="옵션을 선택하세요"
            />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: '다양한 개수의 선택 옵션을 가진 셀렉트박스들을 확인할 수 있습니다.',
            },
        },
    },
};

// 폼 필드로 활용하는 예시
export const FormFieldExample: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
            <Selectbox
                label="국가"
                options={countryOptions}
                value="korea"
            />
            <Selectbox
                label="좋아하는 과일"
                options={defaultOptions}
                placeholder="과일을 선택하세요"
            />
            <Selectbox
                label="필수 선택"
                options={[
                    { value: 'agree', label: '동의함' },
                    { value: 'disagree', label: '동의하지 않음' },
                ]}
                placeholder="필수 선택 사항"
                errorMessage="반드시 선택해주세요"
            />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: '실제 폼에서 사용되는 셀렉트박스 필드들의 예시입니다.',
            },
        },
    },
};

// 키보드 네비게이션을 보여주는 스토리
export const KeyboardNavigation: Story = {
    args: {
        label: '키보드로 조작해보세요',
        options: defaultOptions,
        placeholder: 'Tab → Enter/Space → 화살표키로 선택',
    },
    parameters: {
        docs: {
            description: {
                story: `키보드 네비게이션을 지원합니다:
                
- **Tab**: 셀렉트박스에 포커스 이동
- **Enter/Space**: 드롭다운 열기/닫기
- **화살표 위/아래**: 옵션 선택 및 이동
- **Escape**: 드롭다운 닫기
                
키보드만으로도 완전한 조작이 가능합니다.`,
            },
        },
    },
};

// 접근성 기능을 보여주는 스토리
export const AccessibilityFeatures: Story = {
    args: {
        label: '접근성 기능이 포함된 셀렉트박스',
        options: [
            { value: 'screen-reader', label: '스크린 리더 지원' },
            { value: 'keyboard-nav', label: '키보드 네비게이션' },
            { value: 'aria-labels', label: 'ARIA 레이블' },
            { value: 'focus-management', label: '포커스 관리' },
            { value: 'high-contrast', label: '고대비 모드' },
        ],
        placeholder: '접근성 기능을 선택하세요',
    },
    parameters: {
        docs: {
            description: {
                story: `웹 접근성 기준을 준수하는 기능들:
                
- **role="combobox"**: 셀렉트박스 역할 정의
- **role="listbox"**: 옵션 목록 역할 정의
- **aria-haspopup="listbox"**: 팝업 존재 알림
- **aria-expanded**: 펼침 상태 관리
- **aria-selected**: 선택된 옵션 표시
- **aria-label**: 접근 가능한 이름 제공
                
스크린 리더와 보조 기술에서 완전히 사용 가능합니다.`,
            },
        },
    },
};

// 모든 variant × size 조합
export const VariantSizeCombinations: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '400px' }}>
            <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600' }}>Primary Variant</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <Selectbox variant="primary" size="small" options={defaultOptions} placeholder="Primary Small" />
                    <Selectbox variant="primary" size="medium" options={defaultOptions} placeholder="Primary Medium" />
                    <Selectbox variant="primary" size="large" options={defaultOptions} placeholder="Primary Large" />
                </div>
            </div>
            <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600' }}>Secondary Variant</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <Selectbox variant="secondary" size="small" options={defaultOptions} placeholder="Secondary Small" />
                    <Selectbox variant="secondary" size="medium" options={defaultOptions} placeholder="Secondary Medium" />
                    <Selectbox variant="secondary" size="large" options={defaultOptions} placeholder="Secondary Large" />
                </div>
            </div>
            <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600' }}>Tertiary Variant</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <Selectbox variant="tertiary" size="small" options={defaultOptions} placeholder="Tertiary Small" />
                    <Selectbox variant="tertiary" size="medium" options={defaultOptions} placeholder="Tertiary Medium" />
                    <Selectbox variant="tertiary" size="large" options={defaultOptions} placeholder="Tertiary Large" />
                </div>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: '모든 variant와 size의 조합을 한번에 확인할 수 있습니다. 각 variant는 고유한 스타일을 가지며, size는 높이와 폰트 크기를 조절합니다.',
            },
        },
    },
};

// 상태별 스토리 (모든 상태를 한번에)
export const AllStates: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
            <Selectbox
                label="기본 상태"
                options={defaultOptions}
                placeholder="기본 상태의 셀렉트박스"
            />
            <Selectbox
                label="값이 선택된 상태"
                options={defaultOptions}
                value="apple"
            />
            <Selectbox
                label="에러 상태"
                options={defaultOptions}
                placeholder="에러 상태"
                errorMessage="필수 항목입니다"
            />
            <Selectbox
                label="비활성화 상태"
                options={defaultOptions}
                placeholder="비활성화된 상태"
                disabled
            />
            <Selectbox
                label="비활성화 + 값 선택"
                options={defaultOptions}
                value="banana"
                disabled
            />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: '셀렉트박스의 모든 상태를 한번에 확인할 수 있습니다: 기본, 선택됨, 에러, 비활성화 상태.',
            },
        },
    },
};

// Playground - 모든 조합을 테스트할 수 있는 스토리
export const Playground: Story = {
    args: {
        variant: 'primary',
        size: 'medium',
        options: defaultOptions,
        placeholder: '플레이그라운드 셀렉트박스',
        label: '',
        errorMessage: '',
        disabled: false,
        value: '',
    },
    parameters: {
        docs: {
            description: {
                story: '모든 속성을 자유롭게 조합해서 테스트할 수 있는 플레이그라운드입니다. Controls 패널에서 각 속성을 변경해보세요.',
            },
        },
    },
};
