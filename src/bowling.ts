export const game = (input: string): number => {
  if (input.charAt(0) !== "-") {
    return 5;
  }
  return 0;
};
