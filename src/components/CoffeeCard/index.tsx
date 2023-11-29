import { PlatformPressable } from '@react-navigation/elements';
import { Image, ImageBackground } from 'expo-image';
import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';

import { Box, Text } from '@/theme';

export const CoffeeCard = ({
  title,
  ingredients,
  price,
  image,
  rating,
  onPress,
  onAddToCart,
}: any) => {
  const { width } = useWindowDimensions();
  const cardWidth = width / 2 - 24; // minus gap
  return (
    <PlatformPressable
      onPress={onPress}
      style={[styles.pressable, { width: cardWidth }]}
      pressOpacity={0.7}>
      <Box padding="xs">
        <ImageBackground
          style={styles.imageBackground}
          source={image.source}
          placeholder={image.blurhash}
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
            with {ingredients}
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
};

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
