import { PlatformPressable } from '@react-navigation/elements';
import { Image, ImageBackground } from 'expo-image';
import { router } from 'expo-router';
import { memo } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';

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
      router.push(`/home/${id}`);
    };

    const onAddToCart = () => {
      console.log('add to cart item', id);
    };

    return (
      <PlatformPressable
        onPress={navTo}
        style={[styles.pressable, { width: cardWidth }]}
        pressOpacity={0.7}>
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
                source={require('@/assets/icons/svg/star.svg')}
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
            <PlatformPressable
              onPress={onAddToCart}
              hitSlop={16}
              style={styles.button}
              pressOpacity={0.7}>
              <Image
                style={{
                  width: 16,
                  height: 16,
                }}
                source={require('@/assets/icons/svg/plus.svg')}
                contentFit="contain"
              />
            </PlatformPressable>
          </Box>
        </Box>
      </PlatformPressable>
    );
  },
);

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
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
