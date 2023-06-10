import api from "../api/config";

export const getCandidates = async () => { 
    let data = await api.get('candidates').then(result => result.data);
    return data;
};


export const create = async (candidates) => { 
    let data = await api.post('candidates',candidates).then(result => result.data);
    return data;
};

export const removeCandidate = async (id) => {
    try {
      const response = await api.delete(`Candidates/${id}`);
      // Aquí puedes manejar la respuesta después de eliminar el candidato
      console.log(response.data);
    } catch (error) {
      // Aquí puedes manejar el error en caso de que ocurra
      console.error(error);
    }
  };