import { describe, expect, test } from "vitest";
import { chessBoard } from "./exercise-3";

describe("chessBoard", () => {
  test("generates an 8x8 chessboard", () => {
    const expected = 
      // try to write tests like how user interacts with application
      ` # # # #\n # # # #\n # # # #\n # # # #\n # # # #\n # # # #\n # # # #\n # # # #\n`;
    expect(chessBoard(8)).toBe(expected);
  });
});
