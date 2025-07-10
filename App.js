// App.js
import React from "react";
import { View, StyleSheet, Platform, StatusBar } from "react-native";
import HomePage from "./source/pages/HomePage";
import TopBar from "./source/components/Layout/TopBar";
import BottomBar from "./source/components/Layout/BottomBar";

export default function App() {
  return (
    <View style={styles.container}>
      {Platform.OS === "android" && (
        <StatusBar barStyle="light-content" translucent />
      )}

      <TopBar title="Child Marriage Alert System" />

      <View style={styles.content}>
        <HomePage />
      </View>

      <BottomBar text="Developed by NIC_WEST" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    flex: 1,
    marginTop: 64, // height of TopBar
    marginBottom: 32, // height of BottomBar
  },
});
