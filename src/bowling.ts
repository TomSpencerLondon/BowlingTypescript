export const play = (input: string): number => {
  const chars = input.replace(/[\\|]/g, "");
  let result = 0;
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === "-") {
      result += roll(0);
    } else if (chars[i] === "/") {
      result += roll(10 - parseInt(chars[i - 1].toString()));
    } else if (chars[i] === "X") {
      result += roll(10);
    } else {
      result += roll(parseInt(chars[i].toString()));
    }
  }
  return result;
};

const roll = (number: number): number => {
  return 0;
};
