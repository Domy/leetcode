/**
 * 斐波那契数
 * 该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。
 * 
 * @param {number} n
 * @return {number}
 */
export default function fib(n) {
  if (n <= 1) return n;
  let prev = 0;
  let curr = 1;
  for (let i = 0; i < n - 1; i++) {
    let sum = prev + curr;
    prev = curr;
    curr = sum;
  }
  return curr;
}
