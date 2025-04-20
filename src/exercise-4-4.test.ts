import { describe, expect, test } from "vitest";
import { deepEqual } from "./exercise-4-4";

describe(" exercise 4-4", () => {
  test("deepEqual", () => {
    let obj1 = { here: { is: "an" }, object: 2 };
    let obj2 = { here: 1, object: 2 };

    expect(deepEqual(obj1, obj1)).toEqual(true);
    expect(deepEqual(obj1, obj2)).toEqual(false);
  });
});
