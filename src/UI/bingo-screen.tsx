import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Cell, BingoLetter } from "../containers/bingo-container";
import BingoCell from "../components/bingo-cell";
import RoundButton from "../components/bingo-button";
import { styles } from "../styles/bingo-screen-styles";

type Props = {
  letters: BingoLetter[];
  grid: Cell[];
  started: boolean;
  canReshuffle: boolean;
  onStart: () => void;
  onToggleCell: (id: string) => void;
  onReshuffle: () => void;
};

const BingoScreen = ({
  letters,
  grid,
  started,
  canReshuffle,
  onStart,
  onToggleCell,
  onReshuffle,
}: Props) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Encabezado B I N G O */}
      <View style={styles.headerRow}>
        {letters.map((ltr) => (
          <View key={ltr} style={styles.headerCell}>
            <Text style={[styles.headerText, { color: colors.text }]}>
              {ltr}
            </Text>
          </View>
        ))}
      </View>

      {/* Grid 5x5 */}
      <FlatList
        data={grid}
        keyExtractor={(item) => item.id}
        numColumns={5}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.gridContainer}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <BingoCell
            letter={item.letter}
            number={item.number}
            selected={item.isFree ? false : item.selected}
            isFree={item.isFree}
            onPress={() => onToggleCell(item.id)}
            disabled={false}
          />
        )}
      />

      {/* Acciones */}
      <View style={styles.actions}>
        <RoundButton
          label={started ? "Nuevo cartón" : "Generar cartón"}
          icon={<Ionicons name="shuffle" size={28} color={colors.text} />}
          onPress={onReshuffle}
          disabled={!canReshuffle}
          variant="primary"
        />
      </View>

      {/* Overlay de inicio */}
      {!started && (
        <View style={[styles.overlay, { backgroundColor: "#00000088" }]}>
          <View
            style={[
              styles.startCard,
              { backgroundColor: colors.card, borderColor: colors.border },
            ]}
          >
            <Ionicons
              name="sparkles-outline"
              size={28}
              color={colors.primary}
            />
            <Text style={[styles.title, { color: colors.text }]}>Binguito</Text>
            <Text style={[styles.subtitle, { color: colors.text }]}>
              Toca “Iniciar bingo” para comenzar. No podrás reiniciar hasta
              completar el cartón.
            </Text>

            <RoundButton
              label="Iniciar"
              icon={<Ionicons name="play" size={18} color={colors.text} />}
              onPress={onStart}
              variant="primary"
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default BingoScreen;
