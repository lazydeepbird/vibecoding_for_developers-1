import type { Meta, StoryObj } from '@storybook/nextjs';
import { useState } from 'react';
import { Pagination } from './index';

const meta: Meta<typeof Pagination> = {
    title: 'Commons/Components/Pagination',
    component: Pagination,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '다양한 변형과 크기를 지원하는 페이지네이션 컴포넌트입니다. light/dark 테마를 자동으로 지원합니다.',
            },
        },
    },
    argTypes: {
        currentPage: {
            control: { type: 'number', min: 1 },
            description: '현재 페이지 번호',
        },
        totalPages: {
            control: { type: 'number', min: 1 },
            description: '총 페이지 수',
        },
        pageRange: {
            control: { type: 'number', min: 3, max: 10 },
            description: '한 번에 표시할 페이지 버튼 수',
        },
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'tertiary'],
            description: '페이지네이션의 변형 타입',
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: '페이지네이션의 크기',
        },
        onPageChange: { action: 'page-changed' },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
    args: {
        currentPage: 1,
        totalPages: 10,
    },
};

// Variant별 스토리
export const Primary: Story = {
    args: {
        variant: 'primary',
        currentPage: 3,
        totalPages: 10,
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        currentPage: 3,
        totalPages: 10,
    },
};

export const Tertiary: Story = {
    args: {
        variant: 'tertiary',
        currentPage: 3,
        totalPages: 10,
    },
};

// Size별 스토리
export const Small: Story = {
    args: {
        size: 'small',
        currentPage: 3,
        totalPages: 10,
    },
};

export const Medium: Story = {
    args: {
        size: 'medium',
        currentPage: 3,
        totalPages: 10,
    },
};

export const Large: Story = {
    args: {
        size: 'large',
        currentPage: 3,
        totalPages: 10,
    },
};

// 페이지 범위별 스토리
export const PageRange3: Story = {
    args: {
        currentPage: 5,
        totalPages: 10,
        pageRange: 3,
    },
    parameters: {
        docs: {
            description: {
                story: '페이지 범위를 3으로 설정한 경우입니다.',
            },
        },
    },
};

export const PageRange7: Story = {
    args: {
        currentPage: 5,
        totalPages: 10,
        pageRange: 7,
    },
    parameters: {
        docs: {
            description: {
                story: '페이지 범위를 7로 설정한 경우입니다.',
            },
        },
    },
};

// 다양한 페이지 시나리오
export const SinglePage: Story = {
    args: {
        currentPage: 1,
        totalPages: 1,
    },
    parameters: {
        docs: {
            description: {
                story: '페이지가 1개뿐인 경우입니다.',
            },
        },
    },
};

export const FirstPage: Story = {
    args: {
        currentPage: 1,
        totalPages: 20,
    },
    parameters: {
        docs: {
            description: {
                story: '첫 번째 페이지인 경우입니다.',
            },
        },
    },
};

export const MiddlePage: Story = {
    args: {
        currentPage: 10,
        totalPages: 20,
    },
    parameters: {
        docs: {
            description: {
                story: '중간 페이지인 경우입니다.',
            },
        },
    },
};

export const LastPage: Story = {
    args: {
        currentPage: 20,
        totalPages: 20,
    },
    parameters: {
        docs: {
            description: {
                story: '마지막 페이지인 경우입니다.',
            },
        },
    },
};

export const ManyPages: Story = {
    args: {
        currentPage: 50,
        totalPages: 100,
        pageRange: 5,
    },
    parameters: {
        docs: {
            description: {
                story: '페이지가 많은 경우입니다.',
            },
        },
    },
};

// 모든 variant를 한번에 보여주는 스토리
export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
            <Pagination variant="primary" currentPage={3} totalPages={10} />
            <Pagination variant="secondary" currentPage={3} totalPages={10} />
            <Pagination variant="tertiary" currentPage={3} totalPages={10} />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: '모든 페이지네이션 variant를 한번에 확인할 수 있습니다.',
            },
        },
    },
};

// 모든 크기를 한번에 보여주는 스토리
export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
            <Pagination size="small" currentPage={3} totalPages={10} />
            <Pagination size="medium" currentPage={3} totalPages={10} />
            <Pagination size="large" currentPage={3} totalPages={10} />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: '모든 페이지네이션 크기를 한번에 확인할 수 있습니다.',
            },
        },
    },
};

// 인터랙티브 스토리
export const Interactive: Story = {
    render: (args) => {
        const [currentPage, setCurrentPage] = useState(args.currentPage || 1);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                <div style={{ fontSize: '14px', color: '#666' }}>
                    현재 페이지: {currentPage} / {args.totalPages}
                </div>
                <Pagination
                    {...args}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
            </div>
        );
    },
    args: {
        currentPage: 1,
        totalPages: 15,
        pageRange: 5,
    },
    parameters: {
        docs: {
            description: {
                story: '페이지를 실제로 클릭해서 변경할 수 있는 인터랙티브 스토리입니다.',
            },
        },
    },
};

// Playground - 모든 조합을 테스트할 수 있는 스토리
export const Playground: Story = {
    render: (args) => {
        const [currentPage, setCurrentPage] = useState(args.currentPage || 1);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                <div style={{ fontSize: '14px', color: '#666' }}>
                    현재 페이지: {currentPage} / {args.totalPages}
                </div>
                <Pagination
                    {...args}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
            </div>
        );
    },
    args: {
        variant: 'primary',
        size: 'medium',
        currentPage: 5,
        totalPages: 20,
        pageRange: 5,
    },
    parameters: {
        docs: {
            description: {
                story: '모든 속성을 자유롭게 조합해서 테스트할 수 있는 플레이그라운드입니다.',
            },
        },
    },
};
