export const swap = (array: any[], a: number, b: number): void => {
  [array[a], array[b]] = [array[b], array[a]];
};
