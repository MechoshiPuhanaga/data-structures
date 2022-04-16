export const swap = (array: unknown[], a: number, b: number): void => {
  [array[a], array[b]] = [array[b], array[a]];
};
