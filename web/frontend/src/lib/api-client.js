// /src/lib/api-client.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
  timeout: 8000,
});

api.interceptors.request.use((cfg) => {
  cfg.headers['X-UI-GATE'] = '[UI-GATE] web-qr';
  return cfg;
});

api.interceptors.response.use(
  (r) => r,
  (e) => {
    console.warn('[UI-GATE] API error', e?.response?.status);
    return Promise.reject(e);
  }
);

export default api;