import axios, { AxiosRequestConfig } from "axios";

//GET

export const bringAllProductions = async () => {
    return await axios.get(`http://localhost:5000/api/productions/`);
  };

export const bringProductionsBetweenData = async (datasBody: AxiosRequestConfig) => {
    return axios.get(`http://localhost:5000/api/productions/dates`, datasBody);
  };

//POST

export const registerProduction = async (registerBody: AxiosRequestConfig) => {
    return axios.post(`http://localhost:5000/api/productions/`, registerBody);
  };