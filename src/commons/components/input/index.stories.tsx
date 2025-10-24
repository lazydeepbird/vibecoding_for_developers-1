import type { Meta, StoryObj } from '@storybook/nextjs';
import { Input } from './index';

const meta: Meta<typeof Input> = {
    title: 'Commons/Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '다양한 변형과 크기를 지원하는 기본 인풋 컴포넌트입니다. light/dark 테마를 자동으로 지원합니다.',
            },
        },
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'tertiary'],
            description: '인풋의 변형 타입',
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: '인풋의 크기',
        },
        placeholder: {
            control: 'text',
            description: '인풋 플레이스홀더 텍스트',
        },
        label: {
            control: 'text',
            description: '인풋 라벨',
        },
        errorMessage: {
            control: 'text',
            description: '에러 메시지',
        },
        disabled: {
            control: 'boolean',
            description: '인풋 비활성화 상태',
        },
        value: {
            control: 'text',
            description: '인풋 값',
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
    args: {
        placeholder: '기본 인풋',
    },
};

// Variant별 스토리
export const Primary: Story = {
    args: {
        variant: 'primary',
        placeholder: 'Primary 인풋',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        placeholder: 'Secondary 인풋',
    },
};

export const Tertiary: Story = {
    args: {
        variant: 'tertiary',
        placeholder: 'Tertiary 인풋',
    },
};

// Size별 스토리
export const Small: Story = {
    args: {
        size: 'small',
        placeholder: 'Small 인풋',
    },
};

export const Medium: Story = {
    args: {
        size: 'medium',
        placeholder: 'Medium 인풋',
    },
};

export const Large: Story = {
    args: {
        size: 'large',
        placeholder: 'Large 인풋',
    },
};

// 라벨이 있는 인풋
export const WithLabel: Story = {
    args: {
        label: '이메일 주소',
        placeholder: 'email@example.com',
    },
};

// 에러 상태 인풋
export const WithError: Story = {
    args: {
        label: '비밀번호',
        placeholder: '비밀번호를 입력하세요',
        errorMessage: '비밀번호는 8자 이상이어야 합니다.',
        value: '123',
    },
};

// 값이 있는 인풋
export const WithValue: Story = {
    args: {
        label: '사용자명',
        value: '홍길동',
    },
};

// 비활성화된 인풋
export const Disabled: Story = {
    args: {
        placeholder: '비활성화된 인풋',
        disabled: true,
    },
};

// 모든 variant를 한번에 보여주는 스토리
export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
            <Input variant="primary" placeholder="Primary 인풋" />
            <Input variant="secondary" placeholder="Secondary 인풋" />
            <Input variant="tertiary" placeholder="Tertiary 인풋" />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: '모든 인풋 variant를 한번에 확인할 수 있습니다.',
            },
        },
    },
};

// 모든 크기를 한번에 보여주는 스토리  
export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
            <Input size="small" placeholder="Small 인풋" />
            <Input size="medium" placeholder="Medium 인풋" />
            <Input size="large" placeholder="Large 인풋" />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: '모든 인풋 크기를 한번에 확인할 수 있습니다.',
            },
        },
    },
};

// 라벨과 에러가 있는 완전한 폼 필드
export const CompleteFormField: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
            <Input
                label="이름"
                placeholder="이름을 입력하세요"
                value="홍길동"
            />
            <Input
                label="이메일"
                placeholder="이메일을 입력하세요"
                type="email"
            />
            <Input
                label="비밀번호"
                placeholder="비밀번호를 입력하세요"
                type="password"
                errorMessage="비밀번호는 8자 이상이어야 합니다."
            />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: '라벨과 에러 메시지가 포함된 완전한 폼 필드 예시입니다.',
            },
        },
    },
};

// Playground - 모든 조합을 테스트할 수 있는 스토리
export const Playground: Story = {
    args: {
        variant: 'primary',
        size: 'medium',
        placeholder: '플레이그라운드 인풋',
        label: '',
        errorMessage: '',
        disabled: false,
        value: '',
    },
    parameters: {
        docs: {
            description: {
                story: '모든 속성을 자유롭게 조합해서 테스트할 수 있는 플레이그라운드입니다.',
            },
        },
    },
};
