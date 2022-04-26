import axios from "axios";

const baseURL = "https://frontend-test-assignment-api.abz.agency/api/v1";

export const getPositions = () => {
  return axios.get(`${baseURL}/positions`);
};

export const getUsersPerPage = (page, count) => {
  return axios.get(`${baseURL}/users?page=${page}&count=${count}`);
};

export const getAllUsers = () => {
  return axios.get(`${baseURL}/users?offset=0`);
};

export const getToken = () => {
  return axios.get(`${baseURL}/token`);
};

export const submitData = (body, config) => {
  return axios.post(`${baseURL}/users`, body, config)
}
