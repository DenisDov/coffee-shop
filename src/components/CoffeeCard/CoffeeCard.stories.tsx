import { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { CoffeeCard, CoffeeCardProps } from './CoffeeCard';

const meta: Meta<CoffeeCardProps> = {
  title: 'components/CoffeeCard',
  component: CoffeeCard,
  decorators: [
    Story => (
      <View
        style={{ flex: 1, paddingTop: 10, backgroundColor: 'rebeccapurple' }}>
        <View style={{ width: 164, height: 240 }}>
          <Story />
        </View>
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<CoffeeCardProps>;

export const Basic: Story = {
  args: {
    extras: 'Chocolate',
    id: '1',
    image: {
      source:
        'https://images.unsplash.com/photo-1472973681244-f5bcc808ad47?q=80&w=2974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      thumbhash: '1zgKDYJ2d5aviHdmerhXakX/BXya',
    },
    price: 4.49,
    rating: 4.8,
    title: 'Cappuccino',
  },
};
