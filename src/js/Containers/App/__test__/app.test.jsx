import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from '../index';

import { movie } from '../../../../../configs/jest/__mocks__/mockStore';

test('test APP component render', () => {
  const renderer = new ShallowRenderer();
  renderer.render( <App store={ movie }/> );
  const result = renderer.getRenderOutput();
  expect(result.type).toBe('div');
});
