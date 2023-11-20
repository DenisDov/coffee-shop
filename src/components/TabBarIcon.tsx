import { LinearGradient } from "expo-linear-gradient";
import { View } from "./Themed";
import { Image } from "expo-image";

export function TabBarIcon({ source, focused }) {
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
