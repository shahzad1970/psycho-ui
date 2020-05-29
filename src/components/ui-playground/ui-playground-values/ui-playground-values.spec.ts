import { TestWindow } from '@stencil/core/testing';
import { UiPlaygroundValues } from './ui-playground-values';

describe('ui-playground-values', () => {
  it('should build', () => {
    expect(new UiPlaygroundValues()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLUiPlaygroundValuesElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [UiPlaygroundValues],
        html: '<ui-playground-values></ui-playground-values>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
