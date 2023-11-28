import { PlatformPressable } from '@react-navigation/elements';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { Box, Text } from '@/theme';

export const SearchBar = ({ onChangeText, value }) => {
  return (
    <LinearGradient
      colors={['#131313', '#313131']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        padding: 4,
        height: 52,
        borderColor: '#313131',
        borderRadius: 16,
      }}>
      <Image
        style={{
          width: 20,
          height: 20,
          marginLeft: 12,
        }}
        source={require('@/assets/icons/svg/search.svg')}
        contentFit="contain"
      />
      <TextInput
        placeholder="Search..."
        placeholderTextColor="#989898"
        autoCorrect={false}
        underlineColorAndroid="transparent"
        style={{
          flex: 1,
          color: 'white',
          paddingHorizontal: 12,
        }}
        onChangeText={onChangeText}
        value={value}
      />
      <PlatformPressable
        onPress={() => null}
        hitSlop={16}
        style={styles.filter}
        pressOpacity={0.7}>
        <Image
          style={{
            width: 20,
            height: 20,
          }}
          source={require('@/assets/icons/svg/setting-4.svg')}
          contentFit="contain"
        />
      </PlatformPressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  filter: {
    height: 44,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: '#C67C4E',
  },
});
