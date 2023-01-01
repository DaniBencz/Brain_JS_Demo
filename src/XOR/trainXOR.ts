import { writeFile } from 'fs/promises';
import path from 'path';
import url from 'url';
import { NeuralNetwork, utilities } from 'brain.js';

// creates and trains the network

const xorData = [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] },
];

const net = new NeuralNetwork();

const status = await net.trainAsync(xorData, { log: true, logPeriod: 100 });
// const status = net.train(xorData, { log: true, logPeriod: 100 }); // much faster than async
console.log('STATUS', status);

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const topology = utilities.toSVG(net);
const drawTopology = writeFile(`${__dirname}/XOR_topology.svg`, topology);

const saveNet = writeFile(`${__dirname}/XOR_net.js`, `export default ${net.toFunction().toString()};`);

await Promise.all([drawTopology, saveNet]);
