// import useXOR from "./XOR/XOrNet.js";
// import useMap from "./Map/useMap.js";
import { useCount, forecastCount } from "./Count/useCount.js";

// use nn as an XOR gate
// console.log('XOR result:', useXOR([1, 0])); // [0.93]

// use nn as a map to find the location of an item
// console.log('Map result:', useMap({ 'item1': 1 })); // { loc1: 0.89}

// predict next number in the sequence
console.log('Count Up result:', useCount([2, 3, 4, 5, 6])); // 6.72
console.log('Count Down result:', useCount([7, 6, 5, 4, 3])); // 1.92
console.log('Forecast result:', forecastCount([2, 3, 4, 5, 6], 3)); // [6.72, 7.74, 8.75]
