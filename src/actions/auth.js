import axios from 'axios';
const config = require("../config.json");
const baseUrl =  `${config["BASE_API_URL"]}`


export const setCurrentUser = userInfo => {
  return {
    type: 'SET_CURRENT_USER',
    payload: userInfo
  }
}

export const deletetUser = () => {
  return {
    type: 'DELETE_USER',
    payload: null
  }
}


export const logout = () => dispatch => {
  //setAuthTokenToRequestHeader(false);
  dispatch(deletetUser());
}



export const loginWithPassword = async(username, password) => {
  try {
    const res = await axios.post(`${baseUrl}user/login/password/`, {
      username,
      password
    });
    return res.data;
  } catch (error) {
    throw error;
  }  
}