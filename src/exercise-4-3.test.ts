import { describe, expect, test } from "vitest";
import { arrayToList, listToArray, prepend, nth } from "./exercise-4-3";

describe(" exercise 4-3", () => {
  test("arrayToList", () => {
    expect(arrayToList([1, 2, 3])).toEqual({
      value: 1,
      rest: { value: 2, rest: { value: 3, rest: null } },
    });
    expect(
      listToArray({
        value: 1,
        rest: { value: 2, rest: { value: 3, rest: null } },
      })
    ).toEqual([1, 2, 3]);
    expect(prepend(10, null)).toEqual({
      value: 10,
      rest: null,
    });
    expect(
      nth(
        {
          value: 1,
          rest: { value: 2, rest: { value: 3, rest: null } },
        },
        2
      )
    ).toEqual(3);
  });
});
