import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Box } from '@/theme';

type Props = {
  value: string;
  onChangeText: () => void;
};

export const SearchBar = ({ value, onChangeText }: Props) => {
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
          tintColor: '#FFFFFF',
        }}
        source={require('@/assets/icons/png/search-normal.png')}
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
          height: '100%',
        }}
        onChangeText={onChangeText}
        value={value}
      />

      <RectButton onPress={() => null} hitSlop={16} style={styles.filter}>
        <Box accessible accessibilityRole="button">
          <Image
            style={{
              width: 20,
              height: 20,
              tintColor: '#FFFFFF',
            }}
            source={require('@/assets/icons/png/setting-4.png')}
            contentFit="contain"
          />
        </Box>
      </RectButton>
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
