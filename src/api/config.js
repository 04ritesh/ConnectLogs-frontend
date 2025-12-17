const API_CONFIG = {
  experiences: import.meta.env.PROD 
    ? 'https://connectlogs-production-23c9.up.railway.app'
    : '',
  users: import.meta.env.PROD 
    ? 'https://connectlogs-production-31ac.up.railway.app'
    : '',
  tags: import.meta.env.PROD 
    ? 'https://triumphant-flexibility-production.up.railway.app'
    : ''
};

export default API_CONFIG;