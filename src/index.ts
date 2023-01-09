// import useXOR from "./XOR/XOrNet.js";
// import useMap from "./Map/useMap.js";
// import { useCount, forecastCount } from "./03Count/useCount.js";
import { useStockPrice, forecastStockPrice } from "./04StockPrice/useStockPrice.js";
import { testData } from "./04StockPrice/data.js";

// use nn as an XOR gate
// console.log('XOR result:', useXOR([1, 0])); // [0.93]

// use nn as a map to find the location of an item
// console.log('Map result:', useMap({ 'item1': 1 })); // { loc1: 0.89}

// predict next number in the sequence
// console.log('Count Up result:', useCount([2, 3, 4, 5, 6])); // 6.72
// console.log('Count Down result:', useCount([7, 6, 5, 4, 3])); // 1.92
// console.log('Forecast result:', forecastCount([2, 3, 4, 5, 6], 3)); // [6.72, 7.74, 8.75]

// predict stock price
console.log('Stock Price result:', useStockPrice(testData));
/* {
  open: 143.81948628046513,
  high: 145.78408618717788,
  low: 143.5849535569191,
  close: 145.03735002591011
} */
console.log('Stock Price forecast result:', forecastStockPrice(testData, 3));
/* [
  {
    open: 143.81948628046513,
    high: 145.78408618717788,
    low: 143.5849535569191,
    close: 145.03735002591011
  },
  {
    open: 145.42080877678393,
    high: 147.45332177000046,
    low: 145.39928540141582,
    close: 146.85747675857542
  },
  {
    open: 146.56275688861606,
    high: 147.9157394091606,
    low: 145.58452779366968,
    close: 145.71946582138537
  }
] */
