import axios from "axios";

const USER_BASE_URL = import.meta.env.PROD 
  ? 'https://connectlogs-production-31ac.up.railway.app'
  : '';

const userApi = axios.create({
  baseURL: USER_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

export const signupUser = (userData) =>
  userApi.post('/api/users/signup', userData);

export const loginUser = (credentials) =>
  userApi.post('/api/users/login', credentials);

export const getUserById = (userId) =>
  userApi.get(`/api/users/${userId}`);