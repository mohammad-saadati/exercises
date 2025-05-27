import { describe, it, expect, vi } from 'vitest';
import * as multiplyModule from './exercise-8-1';

const { MultiplicatorUnitFailure, reliableMultiply } = multiplyModule;

describe('reliableMultiply', () => {
  it('retries until primitiveMultiply succeeds', () => {
    const spy = vi.spyOn(multiplyModule, 'primitiveMultiply');

    spy
      .mockImplementationOnce(() => { throw new MultiplicatorUnitFailure('Klunk'); })
      .mockImplementationOnce(() => { throw new MultiplicatorUnitFailure('Klunk'); })
      .mockImplementationOnce(() => 24);

    const result = reliableMultiply(6, 4);
    expect(result).toBe(24);
    expect(spy).toHaveBeenCalledTimes(3);

    spy.mockRestore();
  });

  it('throws unexpected errors', () => {
    const spy = vi.spyOn(multiplyModule, 'primitiveMultiply');

    spy.mockImplementation(() => {
      throw new Error('Unknown failure');
    });

    expect(() => reliableMultiply(2, 2)).toThrow('Unknown failure');

    spy.mockRestore();
  });
});
