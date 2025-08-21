import { ColorSchemeName } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { Ionicons } from "@expo/vector-icons";
import { styles } from "./root-stack-styles";
import { appDarkTheme, appLightTheme } from "../src/styles/themes";

import BingoContainer from "../src/containers/bingo-container";

type Props = { scheme: ColorSchemeName };

export type RootStackParamList = {
  Bingo: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = ({ scheme }: Props) => {
  const theme = scheme === "dark" ? appDarkTheme : appLightTheme;

  const headerLeft = () => (
    <Ionicons
      name="sparkles-outline"
      size={22}
      color={theme.colors.primary}
      style={styles.iconLeft}
    />
  );

  return (
    <Stack.Navigator
      initialRouteName="Bingo"
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.card },
        headerShadowVisible: false,
        headerTitleStyle: styles.headerTitle,
        headerTintColor: theme.colors.text,
        animation: "fade",
      }}
    >
      <Stack.Screen
        name="Bingo"
        component={BingoContainer}
        options={{ title: "Binguito", headerLeft }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
