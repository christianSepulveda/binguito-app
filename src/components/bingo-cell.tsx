import React, { useRef } from "react";
import { Pressable, Text, View, StyleSheet, Animated } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../styles/bingo-cell-styles";

type Props = {
  letter: "B" | "I" | "N" | "G" | "O";
  number: number | null;
  selected: boolean;
  isFree?: boolean;
  disabled?: boolean;
  onPress: () => void;
};

const BingoCell = ({ number, selected, isFree, disabled, onPress }: Props) => {
  const { colors } = useTheme();
  const scale = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    if (disabled) return;
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 0.95,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.spring(scale, { toValue: 1, useNativeDriver: true }),
    ]).start();
    onPress();
  };

  return (
    <Animated.View style={[styles.wrapper, { transform: [{ scale }] }]}>
      <Pressable
        onPress={handlePress}
        android_ripple={{ color: "#ffffff22", radius: 48 }}
        disabled={disabled}
        style={[
          styles.cell,
          {
            backgroundColor: colors.card,
            borderColor: colors.border,
            opacity: disabled ? 0.6 : 1,
          },
          selected && { borderColor: colors.primary, borderWidth: 2 },
        ]}
      >
        <Text
          style={[
            styles.number,
            { color: colors.text },
            isFree && { fontSize: 16, opacity: 0.8 },
            selected && { color: colors.primary },
          ]}
        >
          {isFree ? "" : number}
        </Text>

        {selected && (
          <View style={styles.check}>
            <Ionicons
              name="checkmark-circle"
              size={22}
              color={colors.primary}
            />
          </View>
        )}
      </Pressable>
    </Animated.View>
  );
};

export default BingoCell;
