import { all, put, call, takeLatest } from 'redux-saga/effects';
import { getInsightsDetails } from '../../../services/getInsightsDetails.service';
import { InsightDetailsTypes, InsightDetails } from './types';

interface InsightDetailsType {
  data: InsightDetails;
}

function* getInsightDetails() {
  try {
    const { data }: InsightDetailsType = yield call(getInsightsDetails);
    yield put({ type: InsightDetailsTypes.GET_INSIGHT_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    yield put({
      type: InsightDetailsTypes.GET_INSIGHT_DETAILS_ERROR,
    });
  }
}

export default all([takeLatest(InsightDetailsTypes.GET_INSIGHT_DETAILS, getInsightDetails)]);