import { describe, expect, test } from "vitest";
import { reverseArray, reverseArrayInPlace } from "./exercise-4-2";

describe(" exercise 4-1", () => {
  test("reverseArray", () => {
    expect(reverseArray([1, "b", true, null])).toEqual([ null, true, 'b', 1 ]);
  });

  test("reverseArrayInPlace", () => {
    expect(reverseArrayInPlace([1, "b", true, null])).toEqual([ null, true, 'b', 1 ]);
  });
});
