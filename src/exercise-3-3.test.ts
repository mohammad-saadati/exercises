import { countChar } from "./exercise-3-3";
import { describe, it, expect } from "vitest";

describe(" Exercise 3-2 - find character in string", () => {
  it("should return the number of times the character appears in the string", () => {

    expect(countChar('template to be Tested', 't')).toEqual(4);
  });
});
