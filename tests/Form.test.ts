import React from 'react';
import renderer from 'react-test-renderer';

test('should render App component', () => {
  const tree = renderer.create(<App />);
  expect(tree).not.toBeNull();
  tree.unmount();
  tree.unstable_flushSync();
});
