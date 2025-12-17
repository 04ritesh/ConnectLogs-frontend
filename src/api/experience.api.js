import api from "./axios";

const EXP_BASE = "/api/experiences";

export const getAllExperiences = () =>
  api.get(EXP_BASE);

export const getExperienceBySlug = (slug) =>
  api.get(`${EXP_BASE}/${slug}`);

export const likeExperience = (experienceId, userId) =>
  api.post(`${EXP_BASE}/${experienceId}/like`, { userId });

export const createExperience = (data, userId = 1) =>
  api.post(`${EXP_BASE}?userId=${userId}`, data);
