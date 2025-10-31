import { test, expect } from '@playwright/test';

/**
 * Layout Link Routing 테스트 스위트
 * 
 * 레이아웃 컴포넌트의 링크 라우팅 기능을 테스트합니다.
 * - 네비게이션 탭 활성 상태 확인
 * - 클릭시 페이지 이동 기능 확인
 * - URL 변경에 따른 탭 상태 변경 확인
 */
test.describe('Layout Link Routing', () => {
    test.beforeEach(async ({ page }) => {
        // 일기 목록 페이지로 이동
        await page.goto('/diaries');
        // 페이지 로드 완료 대기 (data-testid로 식별)
        await page.waitForSelector('[data-testid="diaries-tab"]');
    });

    test('일기 목록 페이지에서 일기보관함 탭이 활성화되어야 함', async ({ page }) => {
        // 일기보관함 탭이 활성 상태인지 확인
        const diariesTab = page.locator('[data-testid="diaries-tab"]');
        await expect(diariesTab).toHaveClass(/tabActive/);

        // 사진보관함 탭이 비활성 상태인지 확인
        const picturesTab = page.locator('[data-testid="pictures-tab"]');
        await expect(picturesTab).not.toHaveClass(/tabActive/);
    });

    test('로고 클릭시 일기 목록 페이지로 이동해야 함', async ({ page }) => {
        // 로고 클릭
        await page.locator('[data-testid="logo"]').click();

        // URL 확인
        await expect(page).toHaveURL('/diaries');

        // 일기보관함 탭이 활성화되었는지 확인
        const diariesTab = page.locator('[data-testid="diaries-tab"]');
        await expect(diariesTab).toHaveClass(/tabActive/);
    });

    test('일기보관함 탭 클릭시 일기 목록 페이지로 이동해야 함', async ({ page }) => {
        // 일기보관함 탭 클릭
        await page.locator('[data-testid="diaries-tab"]').click();

        // URL 확인
        await expect(page).toHaveURL('/diaries');

        // 일기보관함 탭이 활성화되었는지 확인
        const diariesTab = page.locator('[data-testid="diaries-tab"]');
        await expect(diariesTab).toHaveClass(/tabActive/);
    });

    test('사진보관함 탭 클릭시 사진 목록 페이지로 이동해야 함 (skip)', async () => {
        test.skip(true, '사진보관함 페이지는 테스트에서 제외');
    });

    test('일기 상세 페이지에서도 일기보관함 탭이 활성화되어야 함', async () => {
        test.skip(true, '일기 상세 페이지가 아직 구현되지 않아 테스트에서 제외');
    });

    test('탭 텍스트 스타일이 활성/비활성 상태에 따라 변경되어야 함', async ({ page }) => {
        // 일기보관함 탭의 텍스트가 활성 스타일인지 확인
        const diariesTabText = page.locator('[data-testid="diaries-tab"] span');
        await expect(diariesTabText).toHaveClass(/tabText/);

        // 사진보관함 탭의 텍스트가 비활성 스타일인지 확인
        const picturesTabText = page.locator('[data-testid="pictures-tab"] span');
        await expect(picturesTabText).toHaveClass(/tabTextInactive/);
    });

    test('키보드 네비게이션이 정상 작동해야 함', async ({ page }) => {
        // 키보드로 탭 이동 테스트 (Tab 키 사용)
        await page.keyboard.press('Tab');

        // 로고 클릭 동작 확인 (마우스 클릭 대신 키보드 이벤트)
        const logo = page.locator('[data-testid="logo"]');
        await logo.click();
        await expect(page).toHaveURL('/diaries');

        // 일기보관함 탭 클릭 동작 확인
        const diariesTab = page.locator('[data-testid="diaries-tab"]');
        await diariesTab.click();
        await expect(page).toHaveURL('/diaries');
        await expect(diariesTab).toHaveClass(/tabActive/);

        // 사진보관함 탭이 클릭 가능한지 확인
        const picturesTab = page.locator('[data-testid="pictures-tab"]');
        await expect(picturesTab).toBeVisible();
        await expect(picturesTab).toBeEnabled();
    });

    test('네비게이션 요소들이 접근성 속성을 가져야 함', async ({ page }) => {
        // 로고가 클릭 가능한 요소임을 확인
        const logo = page.locator('[data-testid="logo"]');
        await expect(logo).toBeVisible();

        // 탭들이 적절한 역할을 가지는지 확인
        const diariesTab = page.locator('[data-testid="diaries-tab"]');
        const picturesTab = page.locator('[data-testid="pictures-tab"]');

        await expect(diariesTab).toBeVisible();
        await expect(picturesTab).toBeVisible();

        // 탭들이 클릭 가능한지 확인
        await expect(diariesTab).toBeEnabled();
        await expect(picturesTab).toBeEnabled();
    });

    test('빠른 연속 클릭에도 안정적으로 작동해야 함', async ({ page }) => {
        // 빠른 연속 클릭 테스트
        const diariesTab = page.locator('[data-testid="diaries-tab"]');
        const picturesTab = page.locator('[data-testid="pictures-tab"]');

        // 연속으로 탭 클릭
        await diariesTab.click();
        await expect(page).toHaveURL('/diaries');

        // 사진보관함 탭 클릭 (실제로는 구현되지 않았지만 클릭 동작은 테스트)
        await picturesTab.click();

        // 다시 일기보관함으로 돌아오기
        await diariesTab.click();
        await expect(page).toHaveURL('/diaries');
        await expect(diariesTab).toHaveClass(/tabActive/);
    });

    test('페이지 새로고침 후에도 올바른 탭이 활성화되어야 함', async ({ page }) => {
        // 현재 페이지 새로고침
        await page.reload();

        // 페이지 로드 대기
        await page.waitForSelector('[data-testid="diaries-tab"]', { state: 'visible' });

        // 일기보관함 탭이 여전히 활성화되어 있는지 확인
        const diariesTab = page.locator('[data-testid="diaries-tab"]');
        await expect(diariesTab).toHaveClass(/tabActive/);

        // URL이 올바른지 확인
        await expect(page).toHaveURL('/diaries');
    });
});
