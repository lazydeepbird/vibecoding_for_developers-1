import type { Meta, StoryObj } from '@storybook/nextjs';
import { Button } from './index';

const meta: Meta<typeof Button> = {
    title: 'Commons/Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '다양한 변형과 크기를 지원하는 기본 버튼 컴포넌트입니다. light/dark 테마를 자동으로 지원합니다.',
            },
        },
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'tertiary'],
            description: '버튼의 변형 타입',
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: '버튼의 크기',
        },
        children: {
            control: 'text',
            description: '버튼 내부 텍스트',
        },
        disabled: {
            control: 'boolean',
            description: '버튼 비활성화 상태',
        },
        onClick: { action: 'clicked' },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
    args: {
        children: '기본 버튼',
    },
};

// Variant별 스토리
export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary 버튼',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary 버튼',
    },
};

export const Tertiary: Story = {
    args: {
        variant: 'tertiary',
        children: 'Tertiary 버튼',
    },
};

// Size별 스토리
export const Small: Story = {
    args: {
        size: 'small',
        children: 'Small 버튼',
    },
};

export const Medium: Story = {
    args: {
        size: 'medium',
        children: 'Medium 버튼',
    },
};

export const Large: Story = {
    args: {
        size: 'large',
        children: 'Large 버튼',
    },
};

// 아이콘이 있는 버튼
export const WithIcon: Story = {
    args: {
        children: '아이콘 버튼',
        icon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
};

// Disabled 상태
export const Disabled: Story = {
    args: {
        children: '비활성화된 버튼',
        disabled: true,
    },
};

// 모든 variant를 한번에 보여주는 스토리
export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: '모든 버튼 variant를 한번에 확인할 수 있습니다.',
            },
        },
    },
};

// 모든 크기를 한번에 보여주는 스토리  
export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: '모든 버튼 크기를 한번에 확인할 수 있습니다.',
            },
        },
    },
};

// Disabled 상태를 모든 variant에 적용
export const AllDisabled: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Button variant="primary" disabled>Primary</Button>
            <Button variant="secondary" disabled>Secondary</Button>
            <Button variant="tertiary" disabled>Tertiary</Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: '비활성화된 상태의 모든 버튼 variant를 확인할 수 있습니다.',
            },
        },
    },
};

// Playground - 모든 조합을 테스트할 수 있는 스토리
export const Playground: Story = {
    args: {
        variant: 'primary',
        size: 'medium',
        children: '버튼 텍스트를 변경해보세요',
        disabled: false,
    },
    parameters: {
        docs: {
            description: {
                story: '모든 속성을 자유롭게 조합해서 테스트할 수 있는 플레이그라운드입니다.',
            },
        },
    },
};
