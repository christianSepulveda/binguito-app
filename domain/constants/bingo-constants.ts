import type { BingoLetter } from "../types/bingo-types";

export const LETTERS: BingoLetter[] = ["B", "I", "N", "G", "O"];
export const RANGES: Record<BingoLetter, [number, number]> = {
  B: [1, 15],
  I: [16, 30],
  N: [31, 45],
  G: [46, 60],
  O: [61, 75],
};
