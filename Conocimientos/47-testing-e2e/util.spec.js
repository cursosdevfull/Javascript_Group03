const { generateText, checkAndGenerate } = require('./util');
const puppeteer = require('puppeteer');
const path = require('path');

describe('Util.js', () => {
  it('Generate text success', () => {
    // Prepare
    const name = 'Cecilia';
    const age = 40;

    // Execute
    const value = generateText(name, age);

    // Assert
    expect(value).toBe('Cecilia (40 years old)');
  });

  it('Generate a valid text output', () => {
    // Prepare
    const name = 'Cecilia';
    const age = 40;

    // Execute
    const value = checkAndGenerate(name, age);

    // Assert
    expect(value).toBe('Cecilia (40 years old)');
  });

  it('Generate message in browser', async () => {
    // Prepare
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 80,
      args: ['--window-size=1920, 1080'],
    });

    // Execute
    const page = await browser.newPage();
    await page.goto(__dirname + '/index.html');

    await page.click('input#name');
    await page.type('input#name', 'Carmela');

    await page.click('input#age');
    await page.type('input#age', '38');

    await page.click('#btnAddUser');

    const textGenerated = await page.$eval(
      '.user-item',
      (el) => el.textContent
    );

    // Assert
    expect(textGenerated).toBe('Carmela (38 years old)');
  }, 20000);
});
