export type BingoLetter = "B" | "I" | "N" | "G" | "O";

export type Cell = {
  id: string;
  letter: BingoLetter;
  number: number | null; // null para casilla libre
  selected: boolean;
  isFree?: boolean;
};

export type Grid = Cell[];
