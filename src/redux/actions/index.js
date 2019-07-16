import * as types from "../types";
import {Alert,AsyncStorage} from 'react-native';
import config from "../../config/config";
    
import axios from 'axios';


export const register = (value) => ({
  type: "REGISTER",
  payload: axios({
    method: "POST",
    url: `${config.BASE_URL}/api/auth/register`,
    data: {
      name: value.name,
      email: value.email,
      password: value.password
    }
  })
});

export const getQuestion = (number) => ({
  type: "GETQUESTION",
  payload: axios({
    method: "GET",
    url: `${config.BASE_URL}/api/v1/question?number=${number}`
  })
});

export const answering = (value) => ({
  type: "ANSWER",
  payload: axios({
    method: "POST",
    url: `${config.BASE_URL}/api/v1/answer`,
    data: {
      question_id: value.question_id,
      answer: value.answer,
      attachment: value.attachment
    },
    headers : {'Authorization' : `Bearer ${value.token}`}
  })
});