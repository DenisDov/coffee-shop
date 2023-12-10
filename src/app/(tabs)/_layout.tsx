import { Tabs } from 'expo-router';

import { MyTabBar } from '@/components/TabBar';
import { TabBarIcon } from '@/components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              source={require('@/assets/icons/tabs/home.png')}
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
              source={require('@/assets/icons/tabs/heart.png')}
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
              source={require('@/assets/icons/tabs/bag.png')}
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
              source={require('@/assets/icons/tabs/notification.png')}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
