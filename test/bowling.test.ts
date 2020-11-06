import { game } from "../src/bowling";

describe("Bowling", () => {
  it.each([["--|--|--|--|--|--|--|--|--|--||", 0]])(
    "returns 0 for gutter game",
    (input: string, output: number) => {
      expect(game(input)).toEqual(output);
    }
  );
});
