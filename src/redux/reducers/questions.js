import * as types from '../types';
import {AsyncStorage} from 'react-native';
const initialState = {
  data: [],
  error: null,
  field: null,
  isLoading: false,
  saveToken: null
}

function quest(state = initialState, action) {
  switch (action.type) {
    case "GETQUESTION":
      return {
        ...state,
        isLoading: true,
      };
      case "GETQUESTION_PENDING":
        return {
          ...state,
          isLoading: true,
        };
    case "GETQUESTION_FULFILLED":
      return {
        ...state,
        isLoading: false,
        data: action.payload.data
      };
    case "GETQUESTION_REJECTED":
      return {
        ...state,
        error: action.payload.response.data[0].message
      };

    default:
      return state
  }
}

export default quest