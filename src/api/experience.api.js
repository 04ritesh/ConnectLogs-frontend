import api from "./axios";
import API_CONFIG from "./config";

const EXP_BASE = import.meta.env.PROD 
  ? `${API_CONFIG.experiences}/api/experiences`
  : "/api/experiences";

export const getAllExperiences = () =>
  api.get(EXP_BASE);

export const getExperienceBySlug = (slug) =>
  api.get(`${EXP_BASE}/${slug}`);

export const likeExperience = (experienceId, userId) =>
  api.post(`${EXP_BASE}/${experienceId}/like`, { userId });

export const createExperience = (data, userId = 1) =>
  api.post(`${EXP_BASE}?userId=${userId}`, data);
