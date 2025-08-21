import { LETTERS, RANGES } from "../constants/bingo-constants";
import type { BingoLetter, Grid } from "../types/bingo-types";

export function randomUnique(
  from: number,
  to: number,
  count: number
): number[] {
  const pool = Array.from({ length: to - from + 1 }, (_, i) => i + from);
  const out: number[] = [];
  while (out.length < count && pool.length) {
    const idx = Math.floor(Math.random() * pool.length);
    out.push(pool.splice(idx, 1)[0]);
  }
  return out;
}

export function buildGrid(): Grid {
  const cols: Record<BingoLetter, number[]> = {
    B: randomUnique(...RANGES.B, 5),
    I: randomUnique(...RANGES.I, 5),
    N: randomUnique(...RANGES.N, 5),
    G: randomUnique(...RANGES.G, 5),
    O: randomUnique(...RANGES.O, 5),
  };

  // Centro libre (N fila 3)
  cols.N[2] = -1;

  const grid: Grid = [];
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      const letter = LETTERS[col];
      const n = cols[letter][row];
      const isFree = letter === "N" && row === 2;
      grid.push({
        id: `${letter}-${row}`,
        letter,
        number: isFree ? null : n,
        selected: !!isFree, // libre ya marcado
        isFree,
      });
    }
  }
  return grid;
}

export const isCardComplete = (cells: Grid) =>
  cells.filter((c) => !c.isFree).every((c) => c.selected);
