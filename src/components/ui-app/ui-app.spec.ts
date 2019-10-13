import { TestWindow } from '@stencil/core/testing';
import { UiApp } from './ui-app';

describe('ui-app', () => {
  it('should build', () => {
    expect(new UiApp()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLUiAppElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [UiApp],
        html: '<ui-app></ui-app>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
