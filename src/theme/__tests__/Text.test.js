import * as React from 'react';

import { render } from '@/lib/test-utils';
import { Text } from '@/theme';

test('renders correctly', () => {
  const tree = render(<Text>Snapshot test!</Text>);
  expect(tree);
});
