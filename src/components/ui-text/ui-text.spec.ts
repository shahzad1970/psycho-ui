import { TestWindow } from '@stencil/core/testing';
import { UiText } from './ui-text';

describe('ui-text', () => {
  it('should build', () => {
    expect(new UiText()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLUiTextElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [UiText],
        html: '<ui-text></ui-text>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
