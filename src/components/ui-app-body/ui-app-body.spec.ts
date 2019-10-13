import { TestWindow } from '@stencil/core/testing';
import { UiAppBody } from './ui-app-body';

describe('ui-app-body', () => {
  it('should build', () => {
    expect(new UiAppBody()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLUiAppBodyElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [UiAppBody],
        html: '<ui-app-body></ui-app-body>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
