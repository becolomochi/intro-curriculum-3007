'use strict';

/**
 * 17の倍数である場合trueを返す
 * @return {number} n
 */
function isMultipleOfSeventeen(n) {
  return n % 17 === 0;
}
module.exports = {
  isMultipleOfSeventeen: isMultipleOfSeventeen
}
