import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.innerBox}>
        <Text style={styles.text}>Hurd work :)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "green",
    fontSize: 30,
  },
  innerBox: {
    borderWidth: 1,
    borderColor: "red",
    padding: 40,
    borderRadius: 10,
    width: 300,
  },
});
