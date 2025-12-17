import api from "./axios";

const USER_BASE = "/api/users";

export const getUserById = (id) =>
  api.get(`${USER_BASE}/${id}`);

export const createUser = (data) =>
  api.post(USER_BASE, data);
