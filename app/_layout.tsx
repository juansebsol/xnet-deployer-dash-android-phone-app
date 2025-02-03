import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Platform, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      {/* Set the status bar to dark mode */}
      <StatusBar style="light" backgroundColor="#000" translucent={true} />

      {/* Hide headers for all screens */}
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Ensures full dark mode
    paddingTop: Platform.OS === "android" ? 25 : 0, // Fixes content getting cut by status bar
  },
});
