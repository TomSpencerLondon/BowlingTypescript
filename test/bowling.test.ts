import { game } from "../src/bowling";

describe("Bowling", () => {
  it.each([
    ["--|--|--|--|--|--|--|--|--|--||", 0],
    ["5-|--|--|--|--|--|--|--|--|--||", 5],
    ["9-|--|--|--|--|--|--|--|--|--||", 9],
    ["34|4-|--|--|--|--|--|--|--|--||", 11],
    ["3/|4-|--|--|--|--|--|--|--|--||", 18],
  ])("returns correct output for input", (input: string, output: number) => {
    expect(game(input)).toEqual(output);
  });
});
