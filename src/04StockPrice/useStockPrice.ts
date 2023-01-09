import path from 'path';
import url from 'url';
import { readFileSync } from 'fs';
import { recurrent } from 'brain.js';
import { Step, scaleUp } from './data.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const json = readFileSync(`${__dirname}/stock_net.json`);
const trainedNet = JSON.parse(json.toString());

const net = new recurrent.LSTMTimeStep();
net.fromJSON(trainedNet);

// uses the trained network
const useStockPrice = (data: Step[]): Step => {
    const rawsResult = net.run(data);
    return scaleUp(rawsResult);
};

const forecastStockPrice = (data: Step[], count: number): Step[] => {
    const rawsResult = net.forecast(data, count);
    return rawsResult.map(scaleUp);
};

export { useStockPrice, forecastStockPrice };
