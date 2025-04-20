import { describe, expect, test } from "vitest";
import { Vec } from "./exercise-6-1";

describe(" exercise 6-1", () => {
  test("Vec class", () => {
    expect(new Vec(1, 2).plus(new Vec(2, 3))).toMatchObject({ x: 3, y: 5 });
    expect(new Vec(1, 2).minus(new Vec(2, 3))).toMatchObject({ x: -1, y: -1 });
    expect(new Vec(3, 4).length).toBe(5);
  });
});
