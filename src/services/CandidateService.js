import api from "../api/config";

export const getCandidates = async () => { 
    let data = await api.get('candidates').then(result => result.data);
    return data;
};


export const create = async (candidates) => { 
    let data = await api.post('candidates',candidates).then(result => result.data);
    return data;
};