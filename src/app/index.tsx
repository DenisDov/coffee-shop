import { Box, Text } from "@/theme";
import { Button } from "@/components/Button";
import { router } from "expo-router";
import { ImageBackground } from "expo-image";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Onboarding() {
  return (
    <ImageBackground
      style={styles.image}
      source={require("@/assets/images/onboarding.png")}
    >
      <StatusBar style="light" />

      <Box flex={1} padding="m" justifyContent="flex-end">
        <Text style={styles.title}>
          Coffee so good, your taste buds will love it.
        </Text>
        <Text style={styles.subTitle}>
          The best grain, the finest roast, the powerful flavor.
        </Text>
        <Button title="Get Started" onPress={() => router.replace("/(tabs)")} />
      </Box>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 34,
    fontFamily: "Sora_600SemiBold",
    marginBottom: 8,
    textAlign: "center",
  },
  subTitle: {
    color: "#A9A9A9",
    textAlign: "center",
    marginBottom: 24,
  },
});
