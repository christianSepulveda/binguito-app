import { useMemo, useState, useCallback } from "react";
import * as Haptics from "expo-haptics";

import BingoScreen from "../UI/bingo-screen";

import type { Grid } from "../../domain/types/bingo-types";
import { LETTERS } from "../../domain/constants/bingo-constants";

import {
  buildGrid,
  isCardComplete,
} from "../../domain/functions/bingo-functions";

const BingoContainer = () => {
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [grid, setGrid] = useState<Grid>(() => buildGrid());

  const startGame = useCallback(() => {
    const fresh = buildGrid();
    setGrid(fresh);
    setCompleted(false);
    setStarted(true);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(
      () => {}
    );
  }, []);

  const toggleCell = useCallback(
    (id: string) => {
      setGrid((prev) => {
        const next = prev.map((c) =>
          c.id === id && !c.isFree ? { ...c, selected: !c.selected } : c
        );
        if (isCardComplete(next)) {
          setCompleted(true);
          Haptics.notificationAsync(
            Haptics.NotificationFeedbackType.Success
          ).catch(() => {});
        } else {
          setCompleted(false);
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(
            () => {}
          );
        }
        return next;
      });
    },
    [started, completed]
  );

  // Nuevo cartón solo si NO ha comenzado o si ya terminó
  const reshuffle = useCallback(() => {
    if (started && !completed) return;
    setGrid(buildGrid());
    setCompleted(false);
    setStarted(false); // vuelve a requerir "Iniciar"
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
  }, [started, completed]);

  const letters = useMemo(() => LETTERS, []);
  const canReshuffle = !started || completed;

  return (
    <BingoScreen
      letters={letters}
      grid={grid}
      started={started}
      canReshuffle={canReshuffle}
      onStart={startGame}
      onToggleCell={toggleCell}
      onReshuffle={reshuffle}
    />
  );
};

export default BingoContainer;
