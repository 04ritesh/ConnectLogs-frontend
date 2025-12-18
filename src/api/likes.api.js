import axios from "axios";

const LIKES_BASE_URL = import.meta.env.PROD 
  ? 'https://connectlogs-production-640c.up.railway.app'
  : '';

const likesApi = axios.create({
  baseURL: LIKES_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

export const likeExperience = (experienceId, userId) =>
  likesApi.post(`/api/likes/experience/${experienceId}/user/${userId}`);

export const unlikeExperience = (experienceId, userId) =>
  likesApi.delete(`/api/likes/experience/${experienceId}/user/${userId}`);

export const checkLikeStatus = (experienceId, userId) =>
  likesApi.get(`/api/likes/experience/${experienceId}/user/${userId}/status`);

export const getLikesCount = (experienceId) =>
  likesApi.get(`/api/likes/experience/${experienceId}/count`);