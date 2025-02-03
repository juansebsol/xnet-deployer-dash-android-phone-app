import React from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={styles.container}>
      {/* WebView to load the XNet Dashboard */}
      <WebView source={{ uri: 'https://dashboard.xnetfoundation.org/' }} style={styles.webview} />
      {/* StatusBar ensures UI adjusts properly on Android */}
      <StatusBar barStyle="dark-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // White background
  },
  webview: {
    flex: 1, // Makes WebView take full screen
  },
});
