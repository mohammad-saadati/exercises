import { generateStarTriangle } from "./exercise-1";
import { describe, it, expect, vi } from "vitest";

describe("Exercise 1 - Star Pattern", () => {
  it('should handle zero iterations', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    generateStarTriangle(0);
    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it('should print correct number of lines based on iterations', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    generateStarTriangle(7);
    expect(consoleSpy).toHaveBeenCalledTimes(7);
    expect(consoleSpy).toHaveBeenLastCalledWith('*******');
    consoleSpy.mockRestore();
  });
});