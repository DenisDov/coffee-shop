import { ThemeProvider } from '@shopify/restyle';
import * as React from 'react';
import renderer from 'react-test-renderer';

import { Text, theme } from '@/theme';

it(`renders correctly`, () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <Text>Snapshot test!</Text>
      </ThemeProvider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
