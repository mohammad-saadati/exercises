import { describe, it, expect } from "vitest";
import { replaceDialogueQuotes } from "./exercise-9-2"; // Adjust the import path as needed

describe("replaceDialogueQuotes", () => {
  it("should replace single quotes around dialogue with double quotes", () => {
    const text = "'I'm the cook,' he said, 'it's my job.'";
    const expected = `"I'm the cook," he said, "it's my job."`;
    expect(replaceDialogueQuotes(text)).toBe(expected);
  });

  it("should not replace single quotes in contractions", () => {
    const text = "I'm happy and you're sad.";
    const expected = "I'm happy and you're sad.";
    expect(replaceDialogueQuotes(text)).toBe(expected);
  });

  it("should handle quotes at the start and end of the string", () => {
    const text = "'Hello,' she said. 'Goodbye.'";
    const expected = `"Hello," she said. "Goodbye."`;
    expect(replaceDialogueQuotes(text)).toBe(expected);
  });

  it("should handle multiple dialogue quotes in the same string", () => {
    const text = "'Hello,' he greeted. 'How are you?' she asked.";
    const expected = `"Hello," he greeted. "How are you?" she asked.`;
    expect(replaceDialogueQuotes(text)).toBe(expected);
  });
});
