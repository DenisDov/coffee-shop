import { StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Shadow } from 'react-native-shadow-2';

import { Box, theme } from '@/theme';

export const TabBar = ({ state, descriptors, navigation }) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <Shadow
      stretch
      distance={theme.spacing.tabShadow * 2}
      startColor="#E4E4E450"
      offset={[0, -10]}
      style={{
        paddingBottom: bottom,
        backgroundColor: 'white',
      }}>
      <Box style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const icon = options.tabBarIcon;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const renderIcon = icon({ focused: isFocused });

          return (
            <BorderlessButton
              key={route.key}
              onPress={onPress}
              style={styles.button}>
              {renderIcon}
            </BorderlessButton>
          );
        })}
      </Box>
    </Shadow>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 65,
    marginTop: -theme.spacing.tabShadow,
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    overflow: 'hidden',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
