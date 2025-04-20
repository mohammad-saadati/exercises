import { describe, expect, test } from "vitest";
import { dominantDirection } from "./exercise-5-4";

describe(" exercise 5-3", () => {
  test("dominantDirection", () => {
    expect(dominantDirection("Hey, مساء الخير")).toBe('rtl');
  });
});
