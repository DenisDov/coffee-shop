import { Link, Tabs, useSegments } from 'expo-router';
import { Pressable } from 'react-native';

import { TabBarIcon } from '@/components/TabBarIcon';
import { Text } from '@/theme';

export default function TabLayout() {
  const segments = useSegments();
  // console.log('segments: ', segments);
  const hide = segments.includes('[id]');
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          display: hide ? 'none' : 'flex',
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              source={require('@/assets/icons/svg/tabs/home.svg')}
              focused={focused}
            />
          ),
          // headerRight: () => (
          //   <Link href="/modal" asChild>
          //     <Pressable
          //       hitSlop={16}
          //       // android_ripple={RIPPLE_CONFIG}
          //       style={({ pressed }) => [
          //         // styles.button,
          //         {
          //           opacity: pressed ? 0.7 : 1,
          //         },
          //       ]}>
          //       <Text>ME</Text>
          //     </Pressable>
          //   </Link>
          // ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              source={require('@/assets/icons/svg/tabs/heart.svg')}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              source={require('@/assets/icons/svg/tabs/bag.svg')}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              source={require('@/assets/icons/svg/tabs/notification.svg')}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
