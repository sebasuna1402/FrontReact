import api from "../api/config";

export const getCompanies = async () => { 
    let data = await api.get('companies').then(result => result.data);
    return data;
};