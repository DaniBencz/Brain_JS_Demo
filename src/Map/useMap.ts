import path from 'path';
import url from 'url';
import { readFileSync } from 'fs';
import { NeuralNetwork } from 'brain.js';

// uses the trained network
const useMap = (data: { [k: string]: number; }) => {
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const json = readFileSync(`${__dirname}/map_net.json`);
    const trainedNet = JSON.parse(json.toString());

    const net = new NeuralNetwork();
    net.fromJSON(trainedNet);

    const output = net.run(data);
    return output;
};

export default useMap;
