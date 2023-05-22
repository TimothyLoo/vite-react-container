// @ts-ignore
import React from 'react';
import renderer from 'react-test-renderer';
import Form from '../src/Form';

describe('Test if Form Renders', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Form />);
    expect(tree).not.toBeNull();
    tree.unmount();
  });
});
