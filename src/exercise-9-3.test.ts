import { describe, it, expect } from "vitest";
import { number } from "./exercise-9-3";

describe("JavaScript-style Number Regex", () => {
  it("should match valid JavaScript-style numbers", () => {
    const validNumbers = [
      "1",
      "-1",
      "+15",
      "1.55",
      ".5",
      "5.",
      "1.3e2",
      "1E-4",
      "1e+12",
    ];

    validNumbers.forEach((str) => {
      expect(number.test(str)).toBe(true);
    });
  });

  it("should not match invalid JavaScript-style numbers", () => {
    const invalidNumbers = [
      "1a",
      "+-1",
      "1.2.3",
      "1+1",
      "1e4.5",
      ".5.",
      "1f5",
      ".",
    ];

    invalidNumbers.forEach((str) => {
      expect(number.test(str)).toBe(false);
    });
  });
});
