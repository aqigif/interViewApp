import * as types from '../types';
import {AsyncStorage} from 'react-native';
const initialState = {
  data: [],
  error: null,
  field: null,
  isLoading: false,
  saveToken: null
}

function register(state = initialState, action) {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        isLoading: true,
      };
      case "REGISTER_PENDING":
        return {
          ...state,
          isLoading: true,
        };
    case "REGISTER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        saveToken: AsyncStorage.setItem('token', action.payload.data.token),
      };
    case "REGISTER_REJECTED":
      return {
        ...state,
        isLoading: false,
        field: action.payload.response.data[0].field,
        error: action.payload.response.data[0].message
      };

    default:
      return state
  }
}

export default register