import React, { useState } from "react";
import {} from "react-native";

import * as Font from "expo-font";
import { AppLoading } from "expo";

import { Provider } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";

import { useRoute } from "./router";
import { store } from "./redux/store";
import db from "./firebase/config";

const loadApplication = async () => {
  await Font.loadAsync({
    "DMMono-Regular": require("./assets/fonts/DMMono-Regular.ttf"),
  });
};

export default function App() {
  const [iasReady, setIasReady] = useState(false);
  const [user, setUser] = useState(null);

  db.auth().onAuthStateChanged((user) => setUser(user));

  const routing = useRoute(user);
  if (!iasReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIasReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
}
