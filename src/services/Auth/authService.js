import axios from "axios";

const hosts = 'http://202.157.177.193:7010/auth/login';

export const LoginService = (username, password) =>
    new Promise((resolve, reject) => {
        const loginVar = {
            username: username,
            password: password
        }
        axios.post(hosts, loginVar)
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