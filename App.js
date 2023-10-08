import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "./header/header";
import * as Font from "expo-font";
import store from "./store/store";
import { useCallback } from "react";
import Body from "./body/body";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import DataHandler from "./dataSchema";

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
    <>
      <SafeAreaView
        edges={["top", "left", "right"]}
        style={styles.container}
        onLayout={onLayoutRootView}
      >
        <DataHandler>
        <Header />
        <Body />
        </DataHandler>
        <StatusBar hidden="false" />
      </SafeAreaView>
    </>
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
