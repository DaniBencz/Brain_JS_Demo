import path from 'path';
import url from 'url';
import { readFileSync } from 'fs';
import { recurrent } from 'brain.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const json = readFileSync(`${__dirname}/count_net.json`);
const trainedNet = JSON.parse(json.toString());

const net = new recurrent.LSTMTimeStep();
net.fromJSON(trainedNet);

// uses the trained network
const useCount = (data: number[]): number => {
    return net.run(data);
};

const forecastCount = (data: number[], count: number): number[] => {
    return net.forecast(data, count);
};

export { useCount, forecastCount };
