import { TestWindow } from '@stencil/core/testing';
import { UiButton } from './ui-button';

describe('ui-button', () => {
  it('should build', () => {
    expect(new UiButton()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLUiButtonElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [UiButton],
        html: '<ui-button></ui-button>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
