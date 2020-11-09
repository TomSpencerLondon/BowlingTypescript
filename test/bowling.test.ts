import { bowl, clearGame, play, result } from "../src/bowling";

describe("Bowling", () => {
  beforeEach(() => {
    clearGame();
  });

  xit.each([
    ["--|--|--|--|--|--|--|--|--|--||", 0],
    ["5-|--|--|--|--|--|--|--|--|--||", 5],
    ["9-|--|--|--|--|--|--|--|--|--||", 9],
    ["34|4-|--|--|--|--|--|--|--|--||", 11],
    ["3/|4-|--|--|--|--|--|--|--|--||", 18],
    ["X|43|--|--|--|--|--|--|--|--||", 24],
    ["--|--|--|--|--|--|--|--|--|X||21", 16],
    ["X|7/|9-|X|-8|8/|-6|X|X|X||81", 167],
    ["X|X|X|--|--|--|--|--|--|--||", 60],
    ["9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||", 90],
  ])("returns correct output for input", (input: string, output: number) => {
    play(input);
    expect(result()).toEqual(output);
  });

  it("can score a gutter game", () => {
    rollGame([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    expect(result()).toEqual(0);
  });

  it("can score one roll", () => {
    rollGame([5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    expect(result()).toEqual(5);
  });

  it("can score some rolls", () => {
    rollGame([5, 0, 0, 1, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9]);
    expect(result()).toEqual(5 + 1 + 7 + 9);
  });

  it("can score a spare", () => {
    rollGame([3, 7, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    expect(result()).toEqual(10 + 4 + 4);
  });

  const rollGame = (rolls: number[]): void => {
    for (const roll of rolls) {
      bowl(roll);
    }
  };
});
