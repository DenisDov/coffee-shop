import { Stack } from 'expo-router';

// create stack layout for home and dynamic detail product page
export default function HomeLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
