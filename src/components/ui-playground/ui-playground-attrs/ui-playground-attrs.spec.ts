import { TestWindow } from '@stencil/core/testing';
import { UiPlaygroundAttrs } from './ui-playground-attrs';

describe('ui-playground-attrs', () => {
  it('should build', () => {
    expect(new UiPlaygroundAttrs()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLUiPlaygroundAttrsElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [UiPlaygroundAttrs],
        html: '<ui-playground-attrs></ui-playground-attrs>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
