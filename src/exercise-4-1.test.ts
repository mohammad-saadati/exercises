import { describe, expect, test } from "vitest";
import { sum, range } from "./exercise-4-1";

describe(" exercise 4-1", () => {
  test("sum", () => {
    expect(sum([1, -1, 0, 4])).toEqual(4);
  });

  test("range", () => {
    expect(range(5, 2, -1)).toEqual([5, 4, 3, 2]);
  });

  test("sum of range", () => {
    expect(sum(range(1, 10))).toEqual(55);
  });
});
