import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import db from "../../firebase/config";

const ProfileScreen = () => (
  <View style={styles.container}>
    <Text>Profile screen</Text>
    <Button title="signOut" onPress={() => db.auth().signOut()} />
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
