
import { all } from 'redux-saga/effects';

import insight from './insight/saga';
import insightDetails from './insight-details/saga';

export default function* rootSaga() {
  return yield all([insight, insightDetails]);
}