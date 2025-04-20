import { describe, expect, test } from "vitest";
import { Group } from "./exercise-6-2";

describe(" exercise 6-1", () => {
  test("Group class", () => {
    expect(Group.from([10, 20]).has(10)).toBeTruthy();
    const group = new Group();
    group.add(10);
    expect(group.has(10)).toBeTruthy();
    group.delete(10);
    expect(group.has(10)).toBeFalsy();
  });});
