import { play, result } from "../src/bowling";

describe("Bowling", () => {
  it.each([
    ["--|--|--|--|--|--|--|--|--|--||", 0],
    ["9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||", 90],
    ["11|11|11|11|11|11|11|11|11|11||", 20],
    ["X|33|--|--|--|--|--|--|--|--||", 22],
    ["X|X|X|X|X|X|X|X|X|X||X|X", 300],
    ["5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5", 150],
    ["X|7/|9-|X|-8|8/|-6|X|X|X||81", 167],
  ])("returns correct output for input", (input: string, output: number) => {
    expect(play(input)).toEqual(output);
  });

  it("can score a gutter game", () => {
    expect(
      result([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    ).toEqual(0);
  });

  it("can score one roll", () => {
    expect(
      result([5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    ).toEqual(5);
  });

  it("can score some rolls", () => {
    expect(
      result([5, 0, 0, 1, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9])
    ).toEqual(5 + 1 + 7 + 9);
  });

  it("can score a spare", () => {
    expect(
      result([3, 7, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    ).toEqual(10 + 4 + 4);
  });

  it("can score a strike", () => {
    expect(
      result([10, 7, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    ).toEqual(10 + 7 + 4 + 7 + 4);
  });

  it("can score a strike in the last frame", () => {
    expect(
      result([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 3, 4])
    ).toEqual(10 + 3 + 4);
  });
});
