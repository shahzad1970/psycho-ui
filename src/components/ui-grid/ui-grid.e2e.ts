import { newE2EPage } from '@stencil/core/testing';

describe('ui-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<ui-grid></ui-grid>');
    const element = await page.find('ui-grid');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
