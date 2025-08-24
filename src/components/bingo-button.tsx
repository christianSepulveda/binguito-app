import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { styles } from "../styles/bingo-button-styles";

type Props = {
  label: string;
  icon?: React.ReactNode;
  onPress: () => void;
  variant?: "default" | "primary";
  disabled?: boolean;
};

const RoundButton = ({
  label,
  icon,
  onPress,
  variant = "default",
  disabled,
}: Props) => {
  const { colors } = useTheme();
  const isPrimary = variant === "primary";

  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "#ffffff22", borderless: false }}
      disabled={disabled}
      style={[
        styles.btn,
        {
          backgroundColor: isPrimary ? colors.primary : colors.card,
          borderColor: colors.border,
          opacity: disabled ? 0.5 : 1,
        },
      ]}
    >
      <View style={styles.content}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <Text
          style={[
            styles.label,
            { color: colors.text },
            isPrimary && { fontWeight: "700" },
          ]}
        >
          {label}
        </Text>
      </View>
    </Pressable>
  );
};

export default RoundButton;
