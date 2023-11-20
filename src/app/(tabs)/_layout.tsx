import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";

import Colors from "../../constants/Colors";
import { View } from "../../components/Themed";

function TabBarIcon({ source, focused }) {
  return (
    <View style={{ backgroundColor: "transparent", gap: 7 }}>
      <Image
        style={{
          width: 24,
          height: 24,
          tintColor: focused ? "#C67C4E" : "#8D8D8D",
        }}
        source={source}
        contentFit="contain"
      />
      {focused && (
        <LinearGradient
          colors={["#EDAB81", "#C67C4E"]}
          start={{ x: 0, y: 0.7 }}
          style={{
            width: 10,
            height: 5,
            borderRadius: 18,
            alignSelf: "center",
          }}
        />
      )}
    </View>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              source={require("../../assets/icons/svg/home.svg")}
              focused={focused}
            />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
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
              source={require("../../assets/icons/svg/heart.svg")}
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
              source={require("../../assets/icons/svg/bag.svg")}
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
              source={require("../../assets/icons/svg/notification.svg")}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
