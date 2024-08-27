import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

axios.interceptors.push({
  request: (config) => {
    const token = store.getState().auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  response: (response) => {
    return response;
  },
  error: (error) => {
    if (error.response.status === 401) {
      store.dispatch(logout());
    }
    return Promise.reject(error);
  },
});