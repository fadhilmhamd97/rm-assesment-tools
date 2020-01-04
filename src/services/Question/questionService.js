import axios from "axios";

const hosts = 'http://202.157.177.193:7010/question';
const tokenBearer = localStorage.getItem('authSession');

export const getQuestionList = () =>
        new Promise((resolve, reject) => {
            axios.get(
                    hosts, 
                    {headers: {'Authorization': 'Bearer ' + JSON.parse(tokenBearer).token}})
                .then(
                    (response) => { resolve(response.data); },
                    (error) => { reject(error); }
                )
        })

export const getQuestionById = questionId =>
    new Promise((resolve, reject) => {
        axios.get(hosts.concat('/'+questionId),
                 {headers: {'Authorization': 'Bearer ' + JSON.parse(tokenBearer).token}})
            .then(
                    (response) => {resolve(response.data)},
                    (error) => reject(error.response)
                 )
    })

export const insertQuestion = questionData =>
    new Promise((resolve, reject) => {
        axios.post(hosts, 
                  questionData,
                  {headers: {'Authorization': 'Bearer ' + JSON.parse(tokenBearer).token}})
                .then(
                    (response) => resolve(response.data),
                    (error) => reject(error.response)
                )
    })