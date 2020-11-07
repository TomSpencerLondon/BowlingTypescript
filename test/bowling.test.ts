import { clearGame, play, result, rollGame } from "../src/bowling";

describe("Bowling", () => {
  beforeEach(() => {
    clearGame();
  });
  it.each([
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
    expect(result());
  });
});
