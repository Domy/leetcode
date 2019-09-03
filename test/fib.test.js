import fib from '../src/fib';

test('斐波那契数', () => {
  expect(fib(4)).toBe(3);
});