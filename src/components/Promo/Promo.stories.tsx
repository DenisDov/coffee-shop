import { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import { Promo } from './Promo';

const meta: Meta = {
  title: 'components/Promo',
  component: Promo,
  decorators: [
    Story => (
      <View style={{ height: 200, padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj;

export const Basic: Story = {};
