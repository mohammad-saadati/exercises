import { describe, expect, test } from "vitest";
import { Group } from "./exercise-6-3";

describe(" exercise 6-1", () => {
  test("Group class", () => {
    const group = Group.from(["a", "b", "c"]);
    const result: string[] = [];
    for (let value of group) {
      result.push(value);
    }
    expect(result).toEqual(["a", "b", "c"]);
  });
});
