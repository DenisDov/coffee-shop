import { PlatformPressable } from '@react-navigation/elements';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Box } from '@/theme';

export const MyTabBar = ({ state, descriptors, navigation }) => {
  const { bottom } = useSafeAreaInsets();
  return (
    <Box
      style={[
        styles.shadow,
        {
          // borderTopLeftRadius: 24,
          // borderTopRightRadius: 24,
          backgroundColor: '#F9F9F9',
        },
      ]}>
      <Box
        style={{
          paddingBottom: bottom,
          backgroundColor: 'white',
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          overflow: 'hidden',
        }}>
        <Box
          style={{
            flexDirection: 'row',
            height: 65,
          }}>
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
              <PlatformPressable
                key={route.key}
                onPress={onPress}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {renderIcon}
              </PlatformPressable>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  shadow: {
    elevation: 5,
    shadowColor: '#E4E4E4',
    shadowRadius: 24,
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.5,
  },
});
