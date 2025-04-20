import { fizzBuzz } from "./exercise-2";
import { describe, it, expect, vi } from "vitest";

describe("Exercise 2 - FizzBuzz", () => {
  it('should print "Fizz" for numbers divisible by 3 and Buzz for numbers divisible by 5 and FizzBuzz for numbers divisible by both', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    fizzBuzz(100);
    expect(consoleSpy).toHaveBeenNthCalledWith(4, " Fizz ");
    expect(consoleSpy).toHaveBeenNthCalledWith(6, " Buzz ");
    expect(consoleSpy).toHaveBeenNthCalledWith(16, " FizzBuzz ");
  });
});