/**
 * Finds the number of unique pairs of stock profits that sum to the target value.
 * Each profit can only be used once, and pairs are considered unique regardless of order.
 * For example, if target=12 and profits=[7,5,4,8], the pairs [7,5] and [8,4] would count as 2 pairs.
 * 
 * The logic is to iterate through the stocksProfit array and check if profit2 is in
 * the seen set. If it is, and profit1 and profit2 are not in the used set, we have found a pair
 * and we increment the pairsCount. We then add profit1 and profit2 to the used set to indicate
 * that we have used them. In this way we iterate through the stocksProfit array only once finding
 * all the pairs that sum to the target in a O(n) time complexity, which is an important optimization
 * especially when we have a large array of profits.
 * 
 * @param {number[]} stocksProfit - Array of stock profit values
 * @param {number} target - Target sum to find pairs for
 * @return {number} - Number of unique pairs that sum to target
 */
function stockPairs(stocksProfit, target) {
  const seen = new Set();
  const used = new Set();
  let pairsCount = 0;

  stocksProfit.forEach((profit1) => {
    const profit2 = target - profit1;
    if (seen.has(profit2) && !used.has(profit1) && !used.has(profit2)) {
      pairsCount++;
      used.add(profit1);
      used.add(profit2);
    }
    seen.add(profit1);
  });
  
  return pairsCount;
}

module.exports = stockPairs