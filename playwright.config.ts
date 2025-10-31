import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright 설정 파일
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
    // 테스트 파일 경로 패턴
    // testDir: './tests',

    // 각 테스트 파일은 자체 worker에서 실행
    // fullyParallel: true,

    // 실패한 테스트를 재시도하지 않음
    // retries: 0,

    // 테스트 결과 리포터 설정
    // reporter: 'html',

    // 테스트 실행 시 공유 설정
    use: {
        // Next.js 개발 서버 기본 URL
        baseURL: 'http://localhost:3000',

        // 모든 테스트에 대해 추적 수집
        // trace: 'on-first-retry',

        // 모든 테스트에서 자동 스크린샷 활성화
        // screenshot: 'only-on-failure',
    },

    // 테스트 프로젝트 설정
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        // {
        //     name: 'firefox',
        //     use: { ...devices['Desktop Firefox'] },
        // },
        // {
        //     name: 'webkit',
        //     use: { ...devices['Desktop Safari'] },
        // },
    ],
});
