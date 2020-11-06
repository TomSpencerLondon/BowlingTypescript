import { game } from "../src/bowling";

describe("Bowling", () => {
  it("returns 0 for gutter game", () => {
    expect(game("--|--|--|--|--|--|--|--|--|--||")).toEqual(0);
  });
});
