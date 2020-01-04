import axios from "axios";

const hosts = 'http://202.157.177.193:7010/question-answer';
const tokenBearer = localStorage.getItem('authSession');

export const getQuestionAnswerList = questionAnswerId =>
        new Promise((resolve, reject) => {
            axios.get(
                    hosts.concat('/question/'+questionAnswerId), 
                    {headers: {'Authorization': 'Bearer ' + JSON.parse(tokenBearer).token}})
                .then(
                    (response) => { resolve(response.data); },
                    (error) => { reject(error); }
                )
        })

export const getAnswerById = answerId =>
    new Promise((resolve, reject) => {
        axios.get(hosts.concat('/'+answerId),
                 {headers: {'Authorization': 'Bearer ' + JSON.parse(tokenBearer).token}})
            .then(
                    (response) => {resolve(response.data)},
                    (error) => reject(error.response)
                 )
    })

export const insertAnswer = answerData =>
    new Promise((resolve, reject) => {
        axios.post(hosts, 
                  answerData,
                  {headers: {'Authorization': 'Bearer ' + JSON.parse(tokenBearer).token}})
                .then(
                    (response) => resolve(response.data),
                    (error) => reject(error.response)
                )
    })

export const updateAnswer = answerData =>
    new Promise((resolve, reject) => {
        axios.put(hosts, 
                  answerData,
                  {headers: {'Authorization': 'Bearer ' + JSON.parse(tokenBearer).token}})
                .then(
                    (response) => resolve(response.data),
                    (error) => reject(error.response)
                )
    })

export const deleteAnswer = answerId =>
    new Promise((resolve, reject) => {
        axios.delete(hosts,
                  answerId,
                  {headers: {'Authorization': 'Bearer ' + JSON.parse(tokenBearer).token}})
                .then(
                    (response) => resolve(response.data),
                    (error) => reject(error.response)
                )
    })