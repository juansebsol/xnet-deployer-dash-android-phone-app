import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      {/* Set the status bar to dark mode */}
      <StatusBar style="light" backgroundColor="#000" translucent={true} />

      {/* Hide headers for all screens */}
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
