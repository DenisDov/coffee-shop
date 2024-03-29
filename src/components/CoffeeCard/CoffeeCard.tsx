import { router } from 'expo-router';
import { memo } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Box, ImageBackgroundBox, ImageBox, Text, theme } from '@/theme';

export type CoffeeCardProps = {
  id: string;
  title: string;
  extras: string;
  price: number;
  image: {
    source: string;
    thumbhash: string;
  };
  rating: number;
};

export const CoffeeCard = memo(
  ({ id, title, extras, price, image, rating }: CoffeeCardProps) => {
    const { width } = useWindowDimensions();
    const cardWidth = width / 2 - 24;

    const navTo = () => {
      router.push(`/product/${id}`);
    };

    const onAddToCart = () => {
      console.log('add to cart item', id);
    };

    return (
      <RectButton
        onPress={navTo}
        style={[styles.rectButton, { width: cardWidth }]}>
        <Box padding="xs">
          <ImageBackgroundBox
            style={styles.imageBackground}
            source={image.source}
            placeholder={{ thumbhash: image.thumbhash }}
            contentFit="cover"
            transition={1000}>
            <Box flexDirection="row" alignItems="center" gap="xxs">
              <ImageBox
                width={10}
                height={10}
                source={require('@/assets/icons/png/star.png')}
                contentFit="contain"
              />
              <Text variant="semiBold" fontSize={10} color="white">
                {rating}
              </Text>
            </Box>
          </ImageBackgroundBox>
        </Box>

        <Box padding="sm" gap="s">
          <Box>
            <Text numberOfLines={1} variant="semiBold">
              {title}
            </Text>
            <Text numberOfLines={1} fontSize={12} color="muted">
              with {extras}
            </Text>
          </Box>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <Text numberOfLines={1} variant="semiBold" fontSize={18}>
              $ {price}
            </Text>

            <RectButton
              onPress={onAddToCart}
              hitSlop={16}
              style={styles.addButton}>
              <ImageBox
                width={16}
                height={16}
                source={require('@/assets/icons/png/plus.png')}
                contentFit="contain"
              />
            </RectButton>
          </Box>
        </Box>
      </RectButton>
    );
  },
);

const styles = StyleSheet.create({
  rectButton: {
    borderRadius: theme.borderRadii.m,
    backgroundColor: theme.colors.white,
    borderCurve: 'continuous',
  },
  imageBackground: {
    padding: theme.spacing.s,
    borderRadius: theme.borderRadii.smm,
    overflow: 'hidden',
    height: 132,
    borderCurve: 'continuous',
  },
  addButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
  },
});
