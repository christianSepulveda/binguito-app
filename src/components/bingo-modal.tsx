import { useTheme } from "@react-navigation/native";
import React from "react";
import { Modal, StyleSheet, View } from "react-native";

type Props = {
  children: React.ReactNode;
  visible: boolean;
  onRequestClose?: () => void;
};

const BingoModal = ({ children, visible, onRequestClose }: Props) => {
  const { colors } = useTheme();

  return (
    <Modal
      visible={visible}
      onRequestClose={onRequestClose}
      transparent
      animationType="fade"
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        <View
          style={[
            styles.container,
            { backgroundColor: colors.card, borderColor: colors.border },
          ]}
        >
          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.83)",
  },
  container: {
    width: "90%",
    borderRadius: 18,
    borderWidth: 1,
    padding: 16,
    gap: 10,
    alignItems: "center",
    marginBottom: "30%",
  },
});

export default BingoModal;
