import { writeFile } from 'fs/promises';
import { NeuralNetwork, utilities } from 'brain.js';

const learnXOR = async () => {

    const xorData = [
        { input: [0, 0], output: [0] },
        { input: [0, 1], output: [1] },
        { input: [1, 0], output: [1] },
        { input: [1, 1], output: [0] },
    ];

    // TRAINING
    const net = new NeuralNetwork();
    const status = await net.trainAsync(xorData, { log: true, logPeriod: 100 });
    // const status = net.train(xorData, { log: true, logPeriod: 100 }); // much faster than async

    // REPORTS
    console.log('status:', status);

    const topology = utilities.toSVG(net);
    await writeFile('reports/XOR_topology.svg', topology);

    // TEST
    const output = net.run([1, 0]); // [0.93]
    return output;
};

export default learnXOR;
