import { describe, it, expect, vi } from "vitest";
import { verify } from "./exercise-9-1";

describe("Regexp Golf", () => {
  it('should match "car" and "cat"', () => {
    const consoleSpy = vi.spyOn(console, "log");
    const regex = /(car|cat)/;
    const yes = ["my car", "bad cats"];
    const no = ["camper", "high art"];

    verify(regex, yes, no);
    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
