import { Text, View } from "../components/Themed";
import { Link } from "expo-router";

export default function Onboarding() {
  return (
    <View>
      <Text>Onboarding page</Text>
      <Link href="/(tabs)">
        <Text>Tabs</Text>
      </Link>
    </View>
  );
}
