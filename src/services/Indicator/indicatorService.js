import axios from "axios";

const hosts = 'http://202.157.177.193:7010/indicator';
const tokenBearer = localStorage.getItem('authSession');

export const IndicatorListService = () =>
    new Promise((resolve, reject) => {
        axios.get(
                 hosts, 
                 {headers: {'Authorization': 'Bearer ' + JSON.parse(tokenBearer).token}})
            .then(
                (response) => { resolve(response.data); },
                (error) => { reject(error); }
            )
    })


export const getIndicatorById = idService =>
    new Promise((resolve, reject) => {
        axios.get(
                hosts.concat('/'+idService),
                {headers: {'Authorization': 'Bearer ' + JSON.parse(tokenBearer).token}})
            .then(
                (response) => { resolve(response.data); },
                (error) => { reject(error); }
        )
    })

export const insertIndicator = indicatorData =>
    new Promise((resolve, reject) => {
        axios.post(
                    hosts, 
                    indicatorData, 
                    {headers: {'Authorization': 'Bearer ' + JSON.parse(tokenBearer).token}})
                    .then(
                        (response) => {resolve(response)},
                        (error) => {reject(error.response)}
        )
    })


export const updateIndicator = indicatorData =>
    new Promise((resolve, reject) => {
        axios.put(
                    hosts, 
                    indicatorData,
                    {headers: {'Authorization': 'Bearer ' + JSON.parse(tokenBearer).token}})
                    .then(
                        (response) => {resolve(response.data.data)},
                        (error) => {reject(error.response)}
        )
    })

export const deleteIndicator = (idService = []) => {
    new Promise((resolve, reject) => {
        const tempPath = idService.length > 0 ?? hosts.concat('/'+idService[0]);
        axios.delete(
                    tempPath, 
                    {headers: {'Authorization': 'bearer ' + tokenBearer}})
                    .then(
                        (response) => {resolve(response)},
                        (error) => {reject(error)}
        )
    })
}