import { Tabs } from 'expo-router';

import { MyTabBar } from '@/components/TabBar';
import { TabBarIcon } from '@/components/TabBarIcon';
import { Box } from '@/theme';

export default function TabLayout() {
  return (
    <Box
      flex={1}
      backgroundColor="background"
      style={{
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
      }}>
      <Tabs
        tabBar={props => <MyTabBar {...props} />}
        screenOptions={{
          headerShown: false,
          // tabBarBackground
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
    </Box>
  );
}
