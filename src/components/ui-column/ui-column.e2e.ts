import { newE2EPage } from '@stencil/core/testing';

describe('ui-column', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<ui-column></ui-column>');
    const element = await page.find('ui-column');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
