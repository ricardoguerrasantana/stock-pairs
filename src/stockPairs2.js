/**
 * Finds the number of unique pairs of stock profits that sum to the target value.
 * Each profit can only be used once, and pairs are considered unique regardless of order.
 * For example, if target=12 and profits=[7,5,4,8], the pairs [7,5] and [8,4] would count as 2 pairs.
 *
 * In this logic, we populate a profits set with all the profit in the stocksProfit array.
 * Then when we iterate through the stocksProfit array we check if profit2 is in the profits set.
 * If it is, and profit1 and profit2 are not in the used set, we count the found pair and add profit1 
 * and profit2 to the used set in a O(n) time complexity. This approach avoids creating pairs array,
 * instead it directly count the pairs found, and also avoids updating the seen set as we no longer
 * need to track the profits we have seen so far, all the profits are in the profits set we initialize
 * at the beginning.
 *
 * @param {number[]} stocksProfit - Array of stock profit values
 * @param {number} target - Target sum to find pairs for
 * @return {number} - Number of unique pairs that sum to target
*/
function stockPairs(stocksProfit, target) {
  const profits = new Set(stocksProfit)
  const used = new Set()
  let pairsCount = 0
  stocksProfit.forEach((profit1) => {
    const profit2 = target - profit1
    if (profits.has(profit2) && !used.has(profit1) && !used.has(profit2)) {
      pairsCount++
      used.add(profit1)
      used.add(profit2)
    }
  })
  return pairsCount
}

module.exports = stockPairs