// box.test.ts
import { describe, it, expect } from "vitest";
import { box, withBoxUnlocked } from "./exercis-8-2";

describe("withBoxUnlocked", () => {
  it("should add item to box when unlocked", () => {
    withBoxUnlocked(() => {
      box.content.push("gold piece");
    });
    withBoxUnlocked(() => {
      expect(box.content.includes("gold piece")).toBe(true);
    });
  });

  it("should lock the box after execution", () => {
    withBoxUnlocked(() => {
      box.content.push("silver coin");
    });
    expect(() => box.content).toThrow("Locked!");
  });

  it("should still lock the box even if an error is thrown", () => {
    expect(() =>
      withBoxUnlocked(() => {
        throw new Error("Pirates on the horizon!");
      })
    ).toThrow("Pirates on the horizon!");
    expect(box.locked).toBe(true);
  });

  it("should leave the box unlocked if it was already unlocked", () => {
    box.unlock();
    withBoxUnlocked(() => {
      box.content.push("diamond");
    });
    expect(box.locked).toBe(false);
    box.lock(); // clean up
  });
});
