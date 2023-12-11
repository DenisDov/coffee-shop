import { Image, ImageBackground } from 'expo-image';
import { router } from 'expo-router';
import { memo } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Box, Text } from '@/theme';

type Props = {
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
  ({ id, title, extras, price, image, rating }: Props) => {
    const { width } = useWindowDimensions();
    const cardWidth = width / 2 - 24; // minus gap

    const navTo = () => {
      router.push(`/product/${id}`);
    };

    const onAddToCart = () => {
      console.log('add to cart item', id);
    };

    return (
      <RectButton
        onPress={navTo}
        style={{
          width: cardWidth,
          borderRadius: 16,
          backgroundColor: 'white',
        }}>
        <Box padding="xs">
          <ImageBackground
            style={styles.imageBackground}
            source={image.source}
            placeholder={{ thumbhash: image.thumbhash }}
            contentFit="cover"
            transition={1000}>
            <Box flexDirection="row" alignItems="center" gap="xxs">
              <Image
                style={{ width: 10, height: 10 }}
                source={require('@/assets/icons/png/star.png')}
                contentFit="contain"
              />
              <Text variant="semiBold" fontSize={10} color="white">
                {rating}
              </Text>
            </Box>
          </ImageBackground>
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
            <Box
              style={{
                borderRadius: 10,
                overflow: 'hidden',
              }}>
              <RectButton
                onPress={onAddToCart}
                hitSlop={16}
                style={styles.button}>
                <Image
                  style={{
                    width: 16,
                    height: 16,
                  }}
                  source={require('@/assets/icons/png/plus.png')}
                  contentFit="contain"
                />
              </RectButton>
            </Box>
          </Box>
        </Box>
      </RectButton>
    );
  },
);

const styles = StyleSheet.create({
  imageBackground: {
    padding: 8,
    borderRadius: 16,
    overflow: 'hidden',
    height: 132,
  },
  button: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C67C4E',
    borderRadius: 10,
  },
});
