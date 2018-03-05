import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-app-react-399e4.firebaseio.com/'
});

export default instance;
