import { TestWindow } from '@stencil/core/testing';
import { UiAppHeader } from './ui-app-header';

describe('ui-app-header', () => {
  it('should build', () => {
    expect(new UiAppHeader()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLUiAppHeaderElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [UiAppHeader],
        html: '<ui-app-header></ui-app-header>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
