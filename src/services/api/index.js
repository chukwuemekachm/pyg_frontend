import axios from 'axios';

const API_URL = process.env.API_URL || 'http://localhost:3000/api/v1';

const api = axios.create({
  baseURL: API_URL,
  timeout: 3000,
});

export function setAuthToken(token) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export * from './requests';

export default api;
