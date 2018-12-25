import axios from 'axios';
import { REQUESTS } from './request';

const configAxios = {
  baseURL: 'https://api.github.com',
  headers: {
    'Content-Type': 'application/json'
  }
};

const cancelToken = axios.CancelToken;
const instance = axios.create(configAxios);

// Request results handlers
const handleResponse = response => {
  return response.data;
};

const handleError = error => {
  if (axios.isCancel(error)) {
    console.log('Request has been canceled');
  } else {
    console.log('Error with fetching', error);
  }
};

// Requests by methods
async function getData(url, data) {
  const source = cancelToken.source();
  if (REQUESTS.handleRequest('get', url, source, data)) {
    return await instance
      .get(url, data, { cancelToken: source.token })
      .then(handleResponse)
      .catch(handleError);
  }
}

async function postData(url, data, options = {}) {
  const source = cancelToken.source();
  if (REQUESTS.handleRequest('post', url, source, data)) {
    return await instance
      .post(url, data, { cancelToken: source.token, ...options })
      .then(handleResponse)
      .catch(handleError);
  }
}
export default {
  get: getData,
  post: postData
};
