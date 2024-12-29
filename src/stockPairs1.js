/**
 * Finds the number of unique pairs of stock profits that sum to the target value.
 * Each profit can only be used once, and pairs are considered unique regardless of order.
 * For example, if target=12 and profits=[7,5,4,8], the pairs [7,5] and [8,4] would count as 2 pairs.
 * 
 * In this logic, we iterate through the stocksProfit array and check if profit2 is in
 * the seen set. If it is, and profit1 and profit2 are not in the used set, we add them to the pairs
 * array and the used set. Then we add profit1 to the seen set. In this way we populate the seen set
 * with all the profits we have seen so far one by one and resulting in a O(n) time complexity.
 * 
 * @param {number[]} stocksProfit - Array of stock profit values
 * @param {number} target - Target sum to find pairs for
 * @return {number} - Number of unique pairs that sum to target
 */
function stockPairs(stocksProfit, target) {
  const pairs = [];
  const seen = new Set();
  const used = new Set();

  stocksProfit.forEach((profit1) => {
    const profit2 = target - profit1;
    if (seen.has(profit2) && !used.has(profit1) && !used.has(profit2)) {
      pairs.push([profit1, profit2]);
      used.add(profit1);
      used.add(profit2);
    }
    seen.add(profit1);
  });
  
  return pairs.length;
}

module.exports = stockPairs