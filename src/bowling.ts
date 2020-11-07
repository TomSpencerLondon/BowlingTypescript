const START_SCORE = 0;
const START_POSITION = 0;

const rolls: number[] = Array<number>(21);
let latest = 0;
let score;
let currentPosition;

export const play = (input: string): void => {
  const chars = input.replace(/[\\|]/g, "");
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === "-") {
      roll(0);
    } else if (chars[i] === "/") {
      roll(10 - parseInt(chars[i - 1].toString()));
    } else if (chars[i] === "X") {
      roll(10);
    } else {
      roll(parseInt(chars[i].toString()));
    }
  }
};

const roll = (toppled: number): void => {
  rolls[latest++] = toppled;
};

export const rollGame = (throws: number[]): void => {
  for (const toppled of rolls) {
    drop(toppled);
  }
};

export const drop = (dropped: number): void => {
  rolls[latest++] = dropped;
};

export const result = (): number => {
  for (let frame = 0; frame < 10; frame++) {
    score += rolls[currentPosition] + rolls[currentPosition + 1];
    currentPosition += 2;
  }

  return score;
};

export const clearGame = (): void => {
  latest = 0;
  score = START_SCORE;
  currentPosition = START_POSITION;
};

