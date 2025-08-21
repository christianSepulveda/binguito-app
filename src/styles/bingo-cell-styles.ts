import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  cell: {
    flex: 1,
    minHeight: 72,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  letterChip: {
    position: "absolute",
    top: 6,
    left: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
  },
  letterText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 10,
    letterSpacing: 1,
  },
  number: { fontFamily: "Poppins_700Bold", fontSize: 22 },
  check: { position: "absolute", bottom: 6, right: 6 },
});
