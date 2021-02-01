import { all, put, call, takeLatest } from 'redux-saga/effects';
import { getInsights } from '../../../services/getInsights.service';
import { InsightTypes, Insight } from './types';

interface InsightType {
  data: Insight[];
}

function* getInsight() {
  try {
    const { data }: InsightType = yield call(getInsights);
    const convertDate = (date: number) => {
      const dateWithMilliseconds = date * 1000;
      const dateObject: Date = new Date(dateWithMilliseconds);
      const dateString = dateObject.toLocaleDateString("en-US", 
      {
        month: "long", 
        day: "numeric"
      }).toUpperCase();
  
      return dateString;
    }

    const dataFormated = data.map(item => ({
      ...item,
      date: convertDate(item.date)
    }))
    yield put({ type: InsightTypes.GET_INSIGHT_SUCCESS, payload: dataFormated });
  } catch (err) {
    yield put({
      type: InsightTypes.GET_INSIGHT_ERROR,
    });
  }
}

export default all([takeLatest(InsightTypes.GET_INSIGHT, getInsight)]);