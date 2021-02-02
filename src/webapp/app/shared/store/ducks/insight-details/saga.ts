import { all, put, call, takeLatest } from 'redux-saga/effects';
import { getInsightsDetails } from '../../../services';
import { InsightDetailsTypes, InsightDetails } from './types';

interface InsightDetailsResponse {
  data: InsightDetails;
}

interface InsightParameter {
  id: string;
}

interface InsightDetailsAction {
  type: InsightDetailsTypes;
  payload: InsightParameter;
}

function* getInsightDetails({ payload: { id } }: InsightDetailsAction) {
  try {
    const { data }: InsightDetailsResponse = yield call(getInsightsDetails, id);
    yield put({ type: InsightDetailsTypes.GET_INSIGHT_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    yield put({
      type: InsightDetailsTypes.GET_INSIGHT_DETAILS_ERROR,
    });
  }
}

export default all([takeLatest(InsightDetailsTypes.GET_INSIGHT_DETAILS, getInsightDetails)]);