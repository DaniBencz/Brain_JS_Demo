import trainedNet from './map_net.js';

// uses the trained network
const useMap = async (data: { [k: string]: number; }) => {
    const output = trainedNet(data);
    return output;
};

export default useMap;
