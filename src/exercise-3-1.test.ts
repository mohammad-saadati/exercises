import { mimicMathMinFunction } from "./exercise-3-1";
import { describe, it, expect } from "vitest";

describe(" Exercise 3-1 - Mimic Math Min Function", () => {
  it("should return the minimum value of two numbers", () => {

    expect(mimicMathMinFunction(0, -10)).toEqual(-10);
    expect(mimicMathMinFunction(-10, -20)).toEqual(-20);
    expect(mimicMathMinFunction(-10, +10)).toEqual(-10);
  });
});
