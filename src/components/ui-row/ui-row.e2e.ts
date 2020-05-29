import { newE2EPage } from '@stencil/core/testing';

describe('ui-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<ui-row></ui-row>');
    const element = await page.find('ui-row');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
