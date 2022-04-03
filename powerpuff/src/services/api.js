import { create } from 'axios';

let api = create({
    baseURL : `http://localhost:8000/api`,
    timeout : 10000,
    headers: {'Access-Control-Allow-Origin': '*'}
})

const errorHandler = (error) => {
    return Promise.reject({ ...error })
}
  
const successHandler = (response) => response;

// Intercepting responses
api.interceptors.response.use(response => successHandler(response),
                                error => errorHandler(error));

export default api;