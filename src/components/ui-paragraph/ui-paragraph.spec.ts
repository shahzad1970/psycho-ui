import { TestWindow } from '@stencil/core/testing';
import { UiParagraph } from './ui-paragraph';

describe('ui-paragraph', () => {
  it('should build', () => {
    expect(new UiParagraph()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLUiParagraphElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [UiParagraph],
        html: '<ui-paragraph></ui-paragraph>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
