export const game = (input: string): number => {
  let result = 0;
  for (let i = 0; i < 30; i++) {
    result += parseInt(input.charAt(i)) || 0;
  }

  return result;
};
