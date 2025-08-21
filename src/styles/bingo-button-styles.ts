import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  btn: { width: "100%", paddingVertical: 18, borderRadius: 14, borderWidth: 1 },
  content: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  icon: { marginRight: 4 },
  label: { fontFamily: "Poppins_500Medium", fontSize: 18, letterSpacing: 0.3 },
});