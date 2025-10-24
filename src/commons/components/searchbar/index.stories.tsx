import type { Meta, StoryObj } from '@storybook/nextjs';
import Searchbar from './index';

const meta: Meta<typeof Searchbar> = {
    title: 'Commons/Components/Searchbar',
    component: Searchbar,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '다양한 변형과 크기를 지원하는 검색바 컴포넌트입니다. light/dark 테마를 자동으로 지원하며, 엔터키 및 검색 버튼을 통한 검색 기능을 제공합니다.',
            },
        },
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'tertiary'],
            description: '검색바의 변형 타입',
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: '검색바의 크기',
        },
        theme: {
            control: 'select',
            options: ['light', 'dark'],
            description: '검색바의 테마',
        },
        placeholder: {
            control: 'text',
            description: '검색바 플레이스홀더 텍스트',
        },
        disabled: {
            control: 'boolean',
            description: '검색바 비활성화 상태',
        },
        onSearch: { action: 'searched' },
        onChange: { action: 'changed' },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
    args: {
        placeholder: '검색어를 입력해 주세요.',
    },
};

// Variant별 스토리
export const Primary: Story = {
    args: {
        variant: 'primary',
        placeholder: 'Primary 검색바',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        placeholder: 'Secondary 검색바',
    },
};

export const Tertiary: Story = {
    args: {
        variant: 'tertiary',
        placeholder: 'Tertiary 검색바',
    },
};

// Size별 스토리
export const Small: Story = {
    args: {
        size: 'small',
        placeholder: 'Small 검색바',
    },
};

export const Medium: Story = {
    args: {
        size: 'medium',
        placeholder: 'Medium 검색바',
    },
};

export const Large: Story = {
    args: {
        size: 'large',
        placeholder: 'Large 검색바',
    },
};

// Theme별 스토리
export const LightTheme: Story = {
    args: {
        theme: 'light',
        placeholder: 'Light 테마 검색바',
    },
    parameters: {
        backgrounds: { default: 'light' },
    },
};

export const DarkTheme: Story = {
    args: {
        theme: 'dark',
        placeholder: 'Dark 테마 검색바',
    },
    parameters: {
        backgrounds: { default: 'dark' },
    },
};

// 비활성화된 검색바
export const Disabled: Story = {
    args: {
        placeholder: '비활성화된 검색바',
        disabled: true,
    },
};

// 기본값이 있는 검색바
export const WithValue: Story = {
    args: {
        placeholder: '검색어를 입력해 주세요.',
        defaultValue: '미리 입력된 검색어',
    },
};

// 모든 variant를 한번에 보여주는 스토리
export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            <Searchbar variant="primary" placeholder="Primary 검색바" />
            <Searchbar variant="secondary" placeholder="Secondary 검색바" />
            <Searchbar variant="tertiary" placeholder="Tertiary 검색바" />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: '모든 검색바 variant를 한번에 확인할 수 있습니다.',
            },
        },
    },
};

// 모든 크기를 한번에 보여주는 스토리  
export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            <Searchbar size="small" placeholder="Small 검색바" />
            <Searchbar size="medium" placeholder="Medium 검색바" />
            <Searchbar size="large" placeholder="Large 검색바" />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: '모든 검색바 크기를 한번에 확인할 수 있습니다.',
            },
        },
    },
};

// 테마 비교 스토리
export const ThemeComparison: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
            <div style={{
                padding: '20px',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
            }}>
                <h3 style={{ margin: '0 0 8px 0', color: '#333333' }}>Light Theme</h3>
                <Searchbar theme="light" variant="primary" placeholder="Primary Light" />
                <Searchbar theme="light" variant="secondary" placeholder="Secondary Light" />
                <Searchbar theme="light" variant="tertiary" placeholder="Tertiary Light" />
            </div>
            <div style={{
                padding: '20px',
                backgroundColor: '#2a2a2a',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
            }}>
                <h3 style={{ margin: '0 0 8px 0', color: '#ffffff' }}>Dark Theme</h3>
                <Searchbar theme="dark" variant="primary" placeholder="Primary Dark" />
                <Searchbar theme="dark" variant="secondary" placeholder="Secondary Dark" />
                <Searchbar theme="dark" variant="tertiary" placeholder="Tertiary Dark" />
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Light와 Dark 테마의 모든 variant를 비교해서 확인할 수 있습니다.',
            },
        },
    },
};

// 상호작용 테스트용 스토리
export const InteractiveSearch: Story = {
    render: () => {
        const handleSearch = (value: string) => {
            alert(`검색어: "${value}"`);
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                <p style={{ textAlign: 'center', marginBottom: '8px' }}>
                    검색어를 입력하고 엔터키를 누르거나 검색 아이콘을 클릭해보세요.
                </p>
                <Searchbar
                    placeholder="검색어를 입력하고 엔터키를 누르세요"
                    onSearch={handleSearch}
                />
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: '실제 검색 기능을 테스트할 수 있는 상호작용 스토리입니다.',
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
        placeholder: '검색바 플레이그라운드',
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
