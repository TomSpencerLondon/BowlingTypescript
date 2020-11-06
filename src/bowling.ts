export const game = (input: string): number => {
  let result = 0;
  if (input.charAt(0) !== "-") {
    result = 5;
  }
  return result;
};
