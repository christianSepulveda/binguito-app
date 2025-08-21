import { useEffect } from "react";
import { ColorSchemeName, useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { appDarkTheme, appLightTheme } from "./src/styles/themes";

import RootStack from "./routes/root-stack";

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function App() {
  const scheme: ColorSchemeName = useColorScheme();

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync().catch(() => {});
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer
          theme={scheme === "dark" ? appDarkTheme : appLightTheme}
        >
          <StatusBar style={scheme === "dark" ? "light" : "light"} />
          <RootStack scheme={scheme} />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
