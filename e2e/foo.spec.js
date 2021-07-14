const { test, expect } = require('@playwright/test');


test.describe('page', () => {

    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        await page.goto('http://localhost:8080')

    });

    test.describe('when loaded', () => {
        test('should have a header', async ({ page }) => {
            const name = await page.innerText('h1');
            expect(name).toBe('foo');
        });
    });
});

