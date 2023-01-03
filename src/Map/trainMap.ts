import { writeFile } from 'fs/promises';
import path from 'path';
import url from 'url';
import { NeuralNetwork, utilities } from 'brain.js';

// creates and trains the network

// the location of certain items
const mapData = [
    { input: { "item1": 1 }, output: { "loc1": 1 } },
    { input: { "item2": 1 }, output: { "loc2": 1 } },
    { input: { "item3": 1 }, output: { "loc3": 1 } },
    { input: { "item4": 1 }, output: { "loc4": 1 } },
    { input: { "item5": 1 }, output: { "loc5": 1 } },
];

const net = new NeuralNetwork();

const status = await net.trainAsync(mapData, { log: true, logPeriod: 100 });
// const status = net.train(mapData, { log: true, logPeriod: 100 }); // much faster than async
console.log('STATUS', status);

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const topology = utilities.toSVG(net);
const drawTopology = writeFile(`${__dirname}/map_topology.svg`, topology);

const saveNet = writeFile(`${__dirname}/map_net.js`, `export default ${net.toFunction().toString()};`);

await Promise.all([drawTopology, saveNet]);
