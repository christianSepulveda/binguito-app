import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16, paddingTop: 12 },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  headerCell: { flex: 1, alignItems: "center", paddingVertical: 8 },
  headerText: { fontFamily: "Poppins_700Bold", fontSize: 22, letterSpacing: 2 },
  gridContainer: { paddingBottom: 16 },
  row: { gap: 10, justifyContent: "space-between", marginBottom: 10 },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    paddingVertical: 10,
    marginBottom: "15%",
  },
  title: { fontFamily: "Poppins_700Bold", fontSize: 24 },
  subtitle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    textAlign: "center",
    opacity: 0.8,
    marginBottom: 8,
  },
});
