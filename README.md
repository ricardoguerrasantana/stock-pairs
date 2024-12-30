# Stock Profit Pairs

This repository contains a solution to the **Profit Targets** problem. The goal is to find the number of distinct pairs of stock profits that sum to a given target value. Each profit can only be used once, and pairs are considered unique regardless of order.

## Problem Description

A financial analyst gathers all distinct pairs of stocks that reached a specific target profit. Given an array of stock profits and a target value, determine how many distinct pairs exist where the sum equals the target.

### Example

```plaintext
Input:
stocksProfit = [6, 6, 3, 9, 3, 5, 1]
target = 12

Output:
2

Explanation:
There are 5 pairs where stocksProfit[i] + stocksProfit[j] = 12:
- (stocksProfit[0], stocksProfit[1]) = (6, 6)
- (stocksProfit[2], stocksProfit[3]) = (3, 9)
- (stocksProfit[3], stocksProfit[2]) = (9, 3)
- (stocksProfit[4], stocksProfit[3]) = (3, 9)
- (stocksProfit[1], stocksProfit[0]) = (6, 6)

After filtering duplicates, there are 2 unique pairs: (6, 6) and (3, 9).
```

## Implementation

### `src/stockPairs.js`

This function implements an optimized approach using two sets: one (`seen`) to track visited profits and another (`used`) to ensure profits are not reused across pairs. The algorithm runs in **O(n)** time complexity.

#### Function Logic

The function iterates through the `stocksProfit` array and checks if the complement of the current profit (i.e., `target - profit1`) exists in the `seen` set. If it does, and neither profit has been marked as used, the pair is counted, and both profits are added to the `used` set. The process ensures each profit is used only once per pair.

### Code

```javascript
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
```

## Usage

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/ricardoguerrasantana/stock-pairs.git
cd stock-pairs
npm install
```

### Running the Code

Here’s how you can use the function:

```javascript
const stockPairs = require('./src/stockPairs');

const stocksProfit = [6, 6, 3, 9, 3, 5, 1];
const target = 12;

console.log(stockPairs(stocksProfit, target)); // Output: 2
```

### Running Tests

Run the test suite with Jest to validate the implementation:

```bash
npm test
```

## Repository Structure

```plaintext
.
├── src/
│   ├── stockPairs.js
├── __tests__/
│   ├── stockPairs.test.js
├── package.json
├── README.md
```

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
