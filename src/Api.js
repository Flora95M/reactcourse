import axios from 'axios'
const options = {
    mode: 'cors',
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": '*'
    },
    crossdomain: true
};
options.baseURL = 'https://react-course-routes-default-rtdb.firebaseio.com';
const instance = axios.create(options);
instance.interceptors.response.use(response => {
    return response.data;
}, error => {
    return Promise.reject(error);
});
export default  instance;