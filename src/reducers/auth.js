import isEmpty from '../utils/isEmpty';
const initialState = {
  isAuthenticated: false,
  jwt_token: null,
  user_details: {}
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload.jwt_token),
        jwt_token: action.payload.jwt_token,
        user_details: action.payload.user_details
      };
    case 'DELETE_USER':
      return {
        ...state,
        isAuthenticated: false,
        jwt_token: null,
        user_details: {}
      };
    
    default:
      return state;
  }
};

export default authReducer;
