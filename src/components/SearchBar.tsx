import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { ImageBox } from '@/theme';

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
      style={styles.gradient}>
      <ImageBox
        width={20}
        height={20}
        marginLeft="sm"
        tintColor="white"
        source={require('@/assets/icons/png/search-normal.png')}
        contentFit="contain"
      />
      <TextInput
        placeholder="Search..."
        placeholderTextColor="#989898"
        autoCorrect={false}
        underlineColorAndroid="transparent"
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
      />

      <RectButton onPress={() => null} hitSlop={16} style={styles.filter}>
        <ImageBox
          width={20}
          height={20}
          tintColor="white"
          source={require('@/assets/icons/png/setting-4.png')}
          contentFit="contain"
        />
      </RectButton>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: 4,
    height: 52,
    borderColor: '#313131',
    borderRadius: 16,
  },
  input: {
    flex: 1,
    color: 'white',
    paddingHorizontal: 12,
    height: '100%',
  },
  filter: {
    height: 44,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: '#C67C4E',
  },
});
