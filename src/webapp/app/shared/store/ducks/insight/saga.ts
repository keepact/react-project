import { all, put, call, takeLatest } from 'redux-saga/effects';
import { getInsights } from '../../../services/getInsights.service';
import { InsightTypes, Insight } from './types';

interface InsightType {
  data: Insight[];
}

function* getInsight() {
  try {
    const { data }: InsightType = yield call(getInsights);
    yield put({ type: InsightTypes.GET_INSIGHT_SUCCESS, payload: data });
  } catch (err) {
    yield put({
      type: InsightTypes.GET_INSIGHT_ERROR,
    });
  }
}

export default all([takeLatest(InsightTypes.GET_INSIGHT, getInsight)]);