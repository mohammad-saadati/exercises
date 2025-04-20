import { describe, expect, test } from "vitest";
import { flattenArrays } from "./exercise-5-1";

describe(" exercise 5-1", () => {
  test("flattenArrays", () => {
    expect(flattenArrays([[1, 2, 3], [4, 5], [6]])).toEqual([ 1, 2, 3, 4, 5, 6 ]);
  });
});
