import * as types from "../types";
import {Alert,AsyncStorage} from 'react-native';
import config from "../../config/config";
    
import axios from 'axios';


export const register = (value) => ({
  type: "REGISTER",
  payload: axios({
    method: "POST",
    url: `http://${config.BASE_URL}:3333/api/auth/register`,
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
    url: `http://${config.BASE_URL}:3333/api/v1/question/number/${number}`
  })
});

export const answer = (quest_id) => ({
  type: "ANSWER",
  payload: axios({
    method: "POST",
    url: `http://${config.BASE_URL}:3333/api/v1/answer`
  })
});