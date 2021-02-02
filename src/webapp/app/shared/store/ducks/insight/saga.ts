import { all, put, call, takeLatest } from 'redux-saga/effects';
import { getInsights } from '../../../services/getInsights.service';
import { InsightTypes, Insight } from './types';
import { convertDate } from '../../../helpers';

interface InsightType {
  data: Insight[];
}

function* getInsight() {
  try {
    const { data }: InsightType = yield call(getInsights);
    const config = { month: 'long', day: 'numeric'};
    const dataFormated = data.map(item => ({
      ...item,
      date: convertDate(item.date, config).toUpperCase()
    }))
    yield put({ type: InsightTypes.GET_INSIGHT_SUCCESS, payload: dataFormated });
  } catch (err) {
    yield put({
      type: InsightTypes.GET_INSIGHT_ERROR,
    });
  }
}

export default all([takeLatest(InsightTypes.GET_INSIGHT, getInsight)]);