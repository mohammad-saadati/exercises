import { isEven } from "./exercise-3-2";
import { describe, it, expect } from "vitest";

describe(" Exercise 3-2 - Is Even", () => {
  it("should return true if the number is even", () => {

    expect(isEven(50)).toEqual(true);
    expect(isEven(75)).toEqual(false);
    expect(isEven(-1)).toEqual(false);
  });
});
