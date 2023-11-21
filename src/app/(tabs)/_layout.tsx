import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import { TabBarIcon } from "@/components/TabBarIcon";
import { Text } from "@/theme";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              source={require("@/assets/icons/svg/tabs/home.svg")}
              focused={focused}
            />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable
                hitSlop={16}
                // android_ripple={RIPPLE_CONFIG}
                style={({ pressed }) => [
                  // styles.button,
                  {
                    opacity: pressed ? 0.7 : 1,
                  },
                ]}
              >
                <Text>ME</Text>
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "favorites",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              source={require("@/assets/icons/svg/tabs/heart.svg")}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              source={require("@/assets/icons/svg/tabs/bag.svg")}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              source={require("@/assets/icons/svg/tabs/notification.svg")}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
