const rolls: number[] = Array<number>();
let latest = 0;

export const play = (input: string): void => {
  const chars = input.replace(/[\\|]/g, "");
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === "-") {
      bowl(0);
    } else if (chars[i] === "/") {
      bowl(10 - parseInt(chars[i - 1].toString()));
    } else if (chars[i] === "X") {
      bowl(10);
    } else {
      bowl(parseInt(chars[i].toString()));
    }
  }
};

export const bowl = (roll: number): void => {
  rolls[latest++] = roll;
};

function isStrike(currentPosition: number) {
  return rolls[currentPosition] === 10;
}

export const result = (): number => {
  let currentPosition = 0;
  let score = 0;

  for (let frame = 0; frame < 10; frame++) {
    if (isStrike(currentPosition)) {
      score += 10 + rolls[currentPosition + 1] + rolls[currentPosition + 2];
      currentPosition += 1;
    } else if (isSpare(currentPosition)) {
      score += 10 + rolls[currentPosition + 2];
      currentPosition += 2;
    } else {
      score += rolls[currentPosition] + rolls[currentPosition + 1];
      currentPosition += 2;
    }
  }

  return score;
};

function isSpare(currentPosition: number) {
  return rolls[currentPosition] + rolls[currentPosition + 1] === 10;
}

export const clearGame = (): void => {
  latest = 0;
};
