import { PlatformPressable } from '@react-navigation/elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Box } from '@/theme';

export const MyTabBar = ({ state, descriptors, navigation }) => {
  const { bottom } = useSafeAreaInsets();
  return (
    <Box backgroundColor="background">
      <Box
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          height: 65,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          overflow: 'hidden',
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
      <Box height={bottom} backgroundColor="white" />
    </Box>
  );
};
