import axios, { Method } from 'axios';

const BASE_URL = 'https://cross-platform.rp.devfactory.com';

export function apiRequest(method: Method, url: string, data?: any) {
  return new Promise((resolve, reject) => {
    return axios({
      method,
      url,
      baseURL: BASE_URL,
      data,
    })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response.data));
  });
}
