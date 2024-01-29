import { ThemeProvider } from '@shopify/restyle';
import * as React from 'react';
import renderer, { act } from 'react-test-renderer';

import { theme } from '@/theme';

import { Button } from './Button';

test('renders button with correct text', () => {
  const onPressMock = jest.fn();
  const buttonText = 'Click me';

  let component;

  act(() => {
    component = renderer.create(
      <ThemeProvider theme={theme}>
        <Button text={buttonText} onPress={onPressMock} />
      </ThemeProvider>,
    );
  });

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
