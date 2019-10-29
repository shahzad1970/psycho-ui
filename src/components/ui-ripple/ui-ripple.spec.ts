import { TestWindow } from '@stencil/core/testing';
import { UiRipple } from './ui-ripple';

describe('ui-ripple', () => {
  it('should build', () => {
    expect(new UiRipple()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLUiRippleElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [UiRipple],
        html: '<ui-ripple></ui-ripple>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
