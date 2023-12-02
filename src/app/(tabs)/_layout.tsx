import { Tabs, useSegments } from 'expo-router';

import { TabBarIcon } from '@/components/TabBarIcon';

export default function TabLayout() {
  const segments = useSegments() as string[];
  const hide: boolean = segments.includes('[id]') || segments.includes('order');
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
