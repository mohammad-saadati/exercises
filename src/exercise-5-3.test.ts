import { describe, expect, test } from "vitest";
import { everyVersion1, everyVersion2 } from "./exercise-5-3";

describe(" exercise 5-3", () => {
  test("everyVersion1", () => {
    expect(everyVersion1([], (n) => n < 10)).toBe(true);
  });
  test("everyVersion2", () => {
    expect(everyVersion2([2, 4, 16], (n) => n < 10)).toBe(false);
  });
});
