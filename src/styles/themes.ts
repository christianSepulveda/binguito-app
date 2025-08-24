import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native";

export const loveDaggerPalette = {
  primary: "#ff0a73",
  primarySoft: "#ff5aa2",
  primaryDark: "#d1005a",
  bgDark: "#0f0d12",
  cardDark: "#17141d",
  borderDark: "#2a2730",
  textDark: "#FDF2F7",
  overlay: "rgba(0, 0, 0, 0.53)",
};

export const appDarkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: loveDaggerPalette.primary,
    background: loveDaggerPalette.bgDark,
    card: loveDaggerPalette.cardDark,
    text: loveDaggerPalette.textDark,
    border: loveDaggerPalette.borderDark,
    notification: loveDaggerPalette.primary,
  },
};
