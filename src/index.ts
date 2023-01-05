// import useXOR from "./XOR/useXOR.js";
import useMap from "./Map/useMap.js";

// use nn as an XOR gate
// console.log('XOR result:', await useXOR([1, 0])); // [0.93]

// use nn as a map to find the location of an item
console.log('Map result:', useMap({ 'item1': 1 })); // { loc1: 0.89}
