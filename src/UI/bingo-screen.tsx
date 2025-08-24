import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import BingoCell from "../components/bingo-cell";
import RoundButton from "../components/bingo-button";
import { styles } from "../styles/bingo-screen-styles";
import type { BingoLetter, Cell } from "../../domain/types/bingo-types";
import BingoModal from "../components/bingo-modal";

type Props = {
  letters: BingoLetter[];
  grid: Cell[];
  started: boolean;
  canReshuffle: boolean;
  showConfirmation: boolean;
  setShowConfirmation: (arg: boolean) => void;
  onStart: () => void;
  onToggleCell: (id: string) => void;
  onReshuffle: () => void;
};

const BingoScreen = ({
  letters,
  grid,
  started,
  canReshuffle,
  showConfirmation,
  setShowConfirmation,
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
          label={"Nuevo cartón"}
          icon={<Ionicons name="shuffle" size={28} color={colors.text} />}
          onPress={() => setShowConfirmation(true)}
          disabled={!canReshuffle}
          variant="primary"
        />
      </View>

      {/* Overlay de inicio */}

      <BingoModal visible={!started ? true : false}>
        <Ionicons name="sparkles-outline" size={28} color={colors.primary} />
        <Text style={[styles.title, { color: colors.text }]}>Binguito</Text>
        <Text style={[styles.subtitle, { color: colors.text }]}>
          Toca “Iniciar” para comenzar. No podrás reiniciar hasta completar el
          cartón.
        </Text>

        <RoundButton
          label="Iniciar"
          icon={<Ionicons name="play" size={18} color={colors.text} />}
          onPress={onStart}
          variant="primary"
        />
      </BingoModal>

      <BingoModal visible={showConfirmation}>
        <Ionicons
          name="information-circle-outline"
          size={28}
          color={colors.primary}
        />
        <Text style={[styles.title, { color: colors.text }]}>Atención</Text>
        <Text style={[styles.subtitle, { color: colors.text }]}>
          Deseas descartar el cartón actual y generar uno nuevo?
        </Text>

        <RoundButton label="Aceptar" onPress={onReshuffle} variant="primary" />

        <RoundButton
          label="Cancelar"
          onPress={() => setShowConfirmation(false)}
          variant="default"
        />
      </BingoModal>
    </View>
  );
};

export default BingoScreen;
