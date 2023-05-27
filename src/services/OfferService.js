import api from "../api/config";

export const getOffers = async () => { 
    let data = await api.get('offers').then(result => result.data);
    return data;
};