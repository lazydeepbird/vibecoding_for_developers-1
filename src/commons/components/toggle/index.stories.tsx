import type { Meta, StoryObj } from '@storybook/nextjs';
import { useState } from 'react';
import { Toggle } from './index';

const meta: Meta<typeof Toggle> = {
    title: 'Commons/Components/Toggle',
    component: Toggle,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '다양한 변형과 크기를 지원하는 토글 스위치 컴포넌트입니다. light/dark 테마를 자동으로 지원합니다.',
            },
        },
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'tertiary'],
            description: '토글의 변형 타입',
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: '토글의 크기',
        },
        theme: {
            control: 'select',
            options: ['light', 'dark'],
            description: '토글의 테마',
        },
        checked: {
            control: 'boolean',
            description: '토글 상태 (제어 컴포넌트)',
        },
        defaultChecked: {
            control: 'boolean',
            description: '기본 토글 상태 (비제어 컴포넌트)',
        },
        disabled: {
            control: 'boolean',
            description: '토글 비활성화 상태',
        },
        'aria-label': {
            control: 'text',
            description: '접근성을 위한 라벨',
        },
        onChange: { action: 'toggled' },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
    args: {
        'aria-label': '기본 토글',
    },
};

// Variant별 스토리
export const Primary: Story = {
    args: {
        variant: 'primary',
        'aria-label': 'Primary 토글',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        'aria-label': 'Secondary 토글',
    },
};

export const Tertiary: Story = {
    args: {
        variant: 'tertiary',
        'aria-label': 'Tertiary 토글',
    },
};

// Size별 스토리
export const Small: Story = {
    args: {
        size: 'small',
        'aria-label': 'Small 토글',
    },
};

export const Medium: Story = {
    args: {
        size: 'medium',
        'aria-label': 'Medium 토글',
    },
};

export const Large: Story = {
    args: {
        size: 'large',
        'aria-label': 'Large 토글',
    },
};

// 상태별 스토리
export const Checked: Story = {
    args: {
        defaultChecked: true,
        'aria-label': '체크된 토글',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        'aria-label': '비활성화된 토글',
    },
};

export const DisabledChecked: Story = {
    args: {
        disabled: true,
        defaultChecked: true,
        'aria-label': '비활성화된 체크 토글',
    },
};

// 제어 컴포넌트 예시
export const Controlled: Story = {
    render: () => {
        const [checked, setChecked] = useState(false);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                <Toggle
                    checked={checked}
                    onChange={setChecked}
                    aria-label="제어된 토글"
                />
                <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
                    현재 상태: {checked ? '켜짐' : '꺼짐'}
                </p>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: '상태를 외부에서 제어하는 토글 컴포넌트 예시입니다.',
            },
        },
    },
};

// Theme별 스토리
export const LightTheme: Story = {
    args: {
        theme: 'light',
        'aria-label': 'Light 테마 토글',
    },
};

export const DarkTheme: Story = {
    args: {
        theme: 'dark',
        'aria-label': 'Dark 테마 토글',
    },
    parameters: {
        backgrounds: { default: 'dark' },
    },
};

// 모든 variant를 한번에 보여주는 스토리
export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Toggle variant="primary" aria-label="Primary" />
                <span style={{ fontSize: '12px', color: '#666' }}>Primary</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Toggle variant="secondary" aria-label="Secondary" />
                <span style={{ fontSize: '12px', color: '#666' }}>Secondary</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Toggle variant="tertiary" aria-label="Tertiary" />
                <span style={{ fontSize: '12px', color: '#666' }}>Tertiary</span>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: '모든 토글 variant를 한번에 확인할 수 있습니다.',
            },
        },
    },
};

// 모든 크기를 한번에 보여주는 스토리  
export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Toggle size="small" aria-label="Small" />
                <span style={{ fontSize: '12px', color: '#666' }}>Small</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Toggle size="medium" aria-label="Medium" />
                <span style={{ fontSize: '12px', color: '#666' }}>Medium</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Toggle size="large" aria-label="Large" />
                <span style={{ fontSize: '12px', color: '#666' }}>Large</span>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: '모든 토글 크기를 한번에 확인할 수 있습니다.',
            },
        },
    },
};

// 모든 상태를 한번에 보여주는 스토리
export const AllStates: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Toggle defaultChecked={false} aria-label="꺼진 상태" />
                <span style={{ fontSize: '12px', color: '#666' }}>꺼진 상태</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Toggle defaultChecked={true} aria-label="켜진 상태" />
                <span style={{ fontSize: '12px', color: '#666' }}>켜진 상태</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Toggle disabled={true} defaultChecked={false} aria-label="비활성화 꺼진 상태" />
                <span style={{ fontSize: '12px', color: '#666' }}>비활성화 (꺼짐)</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Toggle disabled={true} defaultChecked={true} aria-label="비활성화 켜진 상태" />
                <span style={{ fontSize: '12px', color: '#666' }}>비활성화 (켜짐)</span>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: '토글의 모든 상태를 한번에 확인할 수 있습니다.',
            },
        },
    },
};

// 접근성 예시
export const WithAccessibility: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Toggle
                    aria-label="다크 모드 활성화"
                    aria-describedby="dark-mode-desc"
                />
                <label style={{ fontSize: '14px', cursor: 'pointer' }}>
                    다크 모드
                </label>
            </div>
            <p id="dark-mode-desc" style={{
                margin: 0,
                fontSize: '12px',
                color: '#666',
                marginLeft: '12px'
            }}>
                전체 인터페이스를 어두운 테마로 변경합니다.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Toggle
                    aria-label="알림 수신"
                    aria-describedby="notification-desc"
                    defaultChecked
                />
                <label style={{ fontSize: '14px', cursor: 'pointer' }}>
                    알림 수신
                </label>
            </div>
            <p id="notification-desc" style={{
                margin: 0,
                fontSize: '12px',
                color: '#666',
                marginLeft: '12px'
            }}>
                새로운 메시지와 업데이트 알림을 받습니다.
            </p>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: '접근성을 고려한 토글 컴포넌트 사용 예시입니다.',
            },
        },
    },
};

// Playground - 모든 조합을 테스트할 수 있는 스토리
export const Playground: Story = {
    args: {
        variant: 'primary',
        size: 'medium',
        theme: 'light',
        defaultChecked: false,
        disabled: false,
        'aria-label': '플레이그라운드 토글',
    },
    parameters: {
        docs: {
            description: {
                story: '모든 속성을 자유롭게 조합해서 테스트할 수 있는 플레이그라운드입니다.',
            },
        },
    },
};
