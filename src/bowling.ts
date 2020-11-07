export const game = (input: string): number => {
  const filtered = input.replace("|", "");
  let result = 0;
  for (let i = 0; i < filtered.length; i++) {
    if (input.charAt(i) === "/") {
      result += 10 - parseInt(filtered.charAt(i - 1));
      result += parseInt(filtered.charAt(i + 1));
    }
    if (input.charAt(i) === "X") {
      result +=
        10 +
        parseInt(filtered.charAt(i + 1)) +
        parseInt(filtered.charAt(i + 2));
    }
    result += parseInt(filtered.charAt(i)) || 0;
  }

  return result;
};
