import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native";

export const appLightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#0f1222",
    card: "#161a31",
    text: "#F4F6FF",
    primary: "#7C83FD",
    border: "#202542",
  },
};

export const appDarkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#0b0e1a",
    card: "#13162b",
    text: "#E6E9F8",
    primary: "#9AA0FF",
    border: "#202542",
  },
};
