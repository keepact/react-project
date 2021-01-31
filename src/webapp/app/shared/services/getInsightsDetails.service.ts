import api from './api';

export const getInsightsDetails = () =>
  api().request({
    url: 'getinsightdetails',
    method: 'GET',
  });