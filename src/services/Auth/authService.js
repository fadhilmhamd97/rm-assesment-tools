import axios from "axios";

const hosts = 'http://202.157.177.193:7010/auth';

const tokenBearer = localStorage.getItem('authSession');

export const LoginService = (username, password) =>
    new Promise((resolve, reject) => {
        const loginVar = {
            username: username,
            password: password
        }
        axios.post(hosts.concat('/login'), loginVar)
          .then(function (response) {
              //set Local Storage
              localStorage.setItem('authSession', JSON.stringify({
                  username: username,
                  token: response.data.data.token  
              }))
              resolve(response.data);
          })
          .catch(function (error) {
            reject(error.response);
          });
    })

export const registerUser = userData =>
    new Promise((resolve, reject) => {
        axios.post(
                    hosts.concat('/register'), 
                    userData, 
                    {headers: {'Authorization': 'Bearer ' + JSON.parse(tokenBearer).token}})
                    .then(
                        (response) => {resolve(response.data)},
                        (error) => {reject(error.response)}
        )
    })

