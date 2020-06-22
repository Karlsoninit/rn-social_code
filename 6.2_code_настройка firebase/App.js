import React, { useState } from "react";
import {} from "react-native";

import * as Font from "expo-font";
import { AppLoading } from "expo";

import { Provider } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";

import { useRoute } from "./router";
import { store } from "./redux/store";

const loadApplication = async () => {
  await Font.loadAsync({
    "DMMono-Regular": require("./assets/fonts/DMMono-Regular.ttf"),
  });
};

export default function App() {
  const [iasReady, setIasReady] = useState(false);
  const routing = useRoute(true);

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
