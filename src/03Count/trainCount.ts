import url from 'url';
import path from 'path';
import { writeFile } from 'fs/promises';
import { recurrent, utilities } from 'brain.js';

// creates and trains the network

// the location of certain items
const countData = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
];

const net = new recurrent.LSTMTimeStep();

const status = net.train(countData, { log: true, logPeriod: 100 });
console.log('STATUS', status);

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const topology = utilities.toSVG(net);
const drawTopology = writeFile(`${__dirname}/count_topology.svg`, topology);

const saveNet = writeFile(`${__dirname}/count_net.json`, JSON.stringify(net.toJSON()));
await Promise.all([drawTopology, saveNet]);
