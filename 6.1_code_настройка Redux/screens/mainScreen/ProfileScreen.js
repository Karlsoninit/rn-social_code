import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProfileScreen = () => (
  <View style={styles.container}>
    <Text>Profile screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;
