import { StyleSheet } from "react-native";

import { Text, Box } from "@/theme";

export default function NotificationsScreen() {
  return (
    <Box style={styles.container}>
      <Text style={styles.title}>NotificationsScreen</Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
