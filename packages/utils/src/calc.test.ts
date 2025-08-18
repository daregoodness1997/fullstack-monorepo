import { test, expect } from 'vitest';
import { add } from './calc';

test('add should return the sum of two numbers', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(-1, 5)).toBe(4);
  expect(add(0, 0)).toBe(0);
  expect(add(2.5, 2.5)).toBe(5);
});
