import api from './api';

export const getInsightsDetails = (id: string) =>
  api().request({
    url: `getinsightdetails/${id}`,
    method: 'GET'
  });