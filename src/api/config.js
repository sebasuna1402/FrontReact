import axios from 'axios';

const api = axios.create({
  baseURL: 'https://una-jobs-api.orangepond-70a3d77d.westus2.azurecontainerapps.io/api',
});

export default api;