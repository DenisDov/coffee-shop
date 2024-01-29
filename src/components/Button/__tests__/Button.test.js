import React from 'react';

import { fireEvent, render } from '@/lib/test-utils';

import { Button } from '../Button';

describe('Button Component', () => {
  test('renders button with correct text', () => {
    const onPressMock = jest.fn();
    const buttonText = 'Click me';

    const { getByText } = render(
      <Button onPress={onPressMock} text={buttonText} />,
    );

    const button = getByText(buttonText);
    expect(button).toBeTruthy();
  });

  test('calls onPress when button is pressed', () => {
    const onPressMock = jest.fn();
    const buttonText = 'Click me';

    const { getByText } = render(
      <Button onPress={onPressMock} text={buttonText} />,
    );

    const button = getByText(buttonText);
    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
