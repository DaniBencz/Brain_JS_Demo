import trainedNet from './XOR_net.js';

// uses the trained network
const useXOR = async (data: number[]) => {
    const output = trainedNet(data);
    return output;
};

export default useXOR;
