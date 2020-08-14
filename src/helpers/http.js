import axios from 'axios';

export const http = () => {
  const worker = axios.create();
  worker.defaults.baseURL = '';

  return worker;
};
