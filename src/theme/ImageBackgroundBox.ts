import { createBox } from '@shopify/restyle';
import { ImageBackground, ImageBackgroundProps } from 'expo-image';

import { Theme } from './theme';

export const ImageBackgroundBox = createBox<Theme, ImageBackgroundProps>(
  ImageBackground,
);
