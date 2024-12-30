const stockPairs = require("../src/stockPairs")

describe("stockPairs Function Tests", () => {
  const testCases = [
    {
      stocksProfit: [1, 3, 46, 1, 3, 9],
      target: 47,
      expected: 1,
      description: "Single valid pair (1, 46)",
    },
    {
      stocksProfit: [6, 6, 3, 9, 3, 5, 1],
      target: 12,
      expected: 2,
      description: "Two distinct pairs (3, 9) and (6, 6)",
    },
    {
      stocksProfit: [5, 7, 9, 13, 11, 6, 6, 3, 3],
      target: 12,
      expected: 3,
      description: "Three distinct pairs (5, 7), (3, 9), (6, 6)",
    },
    {
      stocksProfit: [5, 5, 5, 5],
      target: 10,
      expected: 1,
      description: "Repeated profits counting as one pair",
    },
    {
      stocksProfit: [],
      target: 10,
      expected: 0,
      description: "Empty array returns 0 pairs",
    },
    {
      stocksProfit: [2, 4, 6, 8],
      target: 15,
      expected: 0,
      description: "No pairs sum to target",
    },
    {
      stocksProfit: [1],
      target: 2,
      expected: 0,
      description: "Single element array returns 0 pairs",
    },
  ]

  testCases.forEach(({ stocksProfit, target, expected, description }) => {
    test(`stockPairs: ${description}`, () => {
      expect(stockPairs(stocksProfit, target)).toBe(expected)
    })
  })
})
