import { loop } from "./exercise-5-2";
import { describe, it, expect, vi } from "vitest";

describe("Exercise 5-2 - Loop Function", () => {
  it('should execute the body function for each iteration with numbers', () => {
    const mockFn = vi.fn();
    
    loop<number>(3, n => n > 0, n => n - 1, mockFn);
    
    expect(mockFn).toHaveBeenCalledTimes(3);
    expect(mockFn).toHaveBeenNthCalledWith(1, 3);
    expect(mockFn).toHaveBeenNthCalledWith(2, 2);
    expect(mockFn).toHaveBeenNthCalledWith(3, 1);
  });
});