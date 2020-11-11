export const play = (input: string): number => {
  const rolls: number[] = Array<number>();
  const chars = input.replace(/[\\|]/g, "");
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === "-") {
      rolls.push(0);
    } else if (chars[i] === "/") {
      rolls.push(10 - parseInt(chars[i - 1].toString()));
    } else if (chars[i] === "X") {
      rolls.push(10);
    } else {
      rolls.push(parseInt(chars[i].toString()));
    }
  }

  return result(rolls);
};

function isStrike(currentPosition: number, rolls: number[]) {
  return rolls[currentPosition] === 10;
}

export const result = (rolls: number[]): number => {
  let currentPosition = 0;
  let score = 0;

  for (let frame = 0; frame < 10; frame++) {
    if (isStrike(currentPosition, rolls)) {
      score += 10 + rolls[currentPosition + 1] + rolls[currentPosition + 2];
      currentPosition += 1;
    } else if (isSpare(currentPosition, rolls)) {
      score += 10 + rolls[currentPosition + 2];
      currentPosition += 2;
    } else {
      score += rolls[currentPosition] + rolls[currentPosition + 1];
      currentPosition += 2;
    }
  }

  return score;
};

function isSpare(currentPosition: number, rolls: number[]) {
  return rolls[currentPosition] + rolls[currentPosition + 1] === 10;
}
