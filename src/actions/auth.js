import axios from 'axios';
const config = require("../config.json");
const baseUrl =  `${config["BASE_API_URL"]}`


export const setCurrentUser = userInfo => {
  return {
    type: 'SET_CURRENT_USER',
    payload: userInfo
  }
}

export const deleteCurrentUser = () => {
  return {
    type: 'DELETE_USER',
    payload: null
  }
}

