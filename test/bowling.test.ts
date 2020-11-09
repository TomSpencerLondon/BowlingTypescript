import { bowl, clearGame, play, result } from "../src/bowling";

describe("Bowling", () => {
  beforeEach(() => {
    clearGame();
  });

  it.each([
    ["--|--|--|--|--|--|--|--|--|--||", 0],
    ["9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||", 90],
    ["11|11|11|11|11|11|11|11|11|11||", 20],
    ["X|33|--|--|--|--|--|--|--|--||", 22],
    ["X|X|X|X|X|X|X|X|X|X|X|X||", 300],
    ["5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5", 150],
    ["X|7/|9-|X|-8|8/|-6|X|X|X||81", 167],
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

  it("can score a strike", () => {
    rollGame([10, 7, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    expect(result()).toEqual(10 + 7 + 4 + 7 + 4);
  });

  it("can score a strike in the last frame", () => {
    rollGame([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 3, 4]);
    expect(result()).toEqual(10 + 3 + 4);
  });

  const rollGame = (rolls: number[]): void => {
    for (const roll of rolls) {
      bowl(roll);
    }
  };
});
