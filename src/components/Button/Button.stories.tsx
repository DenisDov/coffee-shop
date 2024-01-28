import { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import { Button, ButtonProps } from './Button';

const meta: Meta<ButtonProps> = {
  title: 'components/Button',
  component: Button,
  argTypes: {
    onPress: {
      action: 'onPress event',
    },
  },
  decorators: [
    Story => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Basic: Story = {
  args: {
    // disabled: false,
    text: 'Tap me',
  },
};

export const Disabled: Story = {
  args: {
    // disabled: true,
    text: 'Disabled',
  },
};
