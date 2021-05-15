const { chromium, webkit, firefox } = require('playwright');
const browserName = process.env.BROWSER || 'webkit';
let browser;

describe('page', () => {
    let browser, page

    beforeAll(async () => {
        browser = await { chromium, webkit, firefox }[browserName].launch();
    })
    afterAll(async () => {
        await browser.close()
    })

    describe('when loaded', () => {

        beforeEach(async () => {
            page = await browser.newPage()
            await page.goto('http://localhost:8080')
        });
        afterEach(async () => {
            await page.close();
        });

        it('should have a header', async () => {
            expect(await page.innerText('h1')).toBe('foo');
        });
    });
});
