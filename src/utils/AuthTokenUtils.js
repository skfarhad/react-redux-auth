import axios from 'axios';


const setAuthToken = token => {
  if(token) {
    axios.defaults.headers.common['Authorization'] = `jwt ${token}`
  }else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

export default setAuthToken;