import { NeuralNetwork } from 'brain.js';

const learnXOR = () => {
    const net = new NeuralNetwork();

    const xorData = [
        { input: [0, 0], output: [0] },
        { input: [0, 1], output: [1] },
        { input: [1, 0], output: [1] },
        { input: [1, 1], output: [0] },
    ]

    net.train(xorData);

    const output = net.run([1, 0]); // [0.93]

    return output;
}

export default learnXOR;
