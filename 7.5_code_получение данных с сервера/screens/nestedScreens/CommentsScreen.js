import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CommentsScreen = () => (
  <View style={styles.container}>
    <Text>CommentsScreen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CommentsScreen;
