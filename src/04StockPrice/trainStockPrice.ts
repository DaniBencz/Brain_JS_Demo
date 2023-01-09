import url from 'url';
import path from 'path';
import { writeFile } from 'fs/promises';
import { recurrent, utilities } from 'brain.js';
import { normalizedData } from './data.js';

const net = new recurrent.LSTMTimeStep({
    inputSize: 4,
    hiddenLayers: [8, 8],
    outputSize: 4
});

const status = net.train(normalizedData, {
    learningRate: 0.005,
    errorThresh: 0.02,
    log: true,
    logPeriod: 100,
});
console.log('STATUS', status);

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const topology = utilities.toSVG(net);
const drawTopology = writeFile(`${__dirname}/stock_topology.svg`, topology);

const saveNet = writeFile(`${__dirname}/stock_net.json`, JSON.stringify(net.toJSON()));
await Promise.all([drawTopology, saveNet]);
