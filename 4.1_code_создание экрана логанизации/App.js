import React, { useState, useEffect } from "react";
import {} from "react-native";

import * as Font from "expo-font";
import { AppLoading } from "expo";

import LoginScreen from "./screens/auth/LoginScreen";

const loadApplication = async () => {
  await Font.loadAsync({
    "DMMono-Regular": require("./assets/fonts/DMMono-Regular.ttf"),
  });
};

export default function App() {
  const [iasReady, setIasReady] = useState(false);

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
    <>
      <LoginScreen />
    </>
  );
}
