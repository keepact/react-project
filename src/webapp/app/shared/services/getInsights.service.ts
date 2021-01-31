import api from './api';

export const getInsights = () =>
  api().request({
    url: 'getinsights',
    method: 'GET',
  });