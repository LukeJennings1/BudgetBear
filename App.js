import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "./header/header";
import * as Font from "expo-font";
import { Provider } from "react-redux";
import store from "./store/store";
import { useCallback } from "react";
import Body from "./body/body";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Bebas-Neue-Regular": require("./assets/fonts/Bebas-Neue-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaView
        edges={["top", "left", "right"]}
        style={styles.container}
        onLayout={onLayoutRootView}
      >
        <Header />
        <Body />
        <StatusBar hidden="false" />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#eef4ed",
  },
});
