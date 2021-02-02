import { all, put, call, takeLatest } from 'redux-saga/effects';
import { getInsightsDetails } from '../../../services';
import { InsightDetailsTypes, InsightDetails } from './types';
import { convertDate, formatPrice } from '../../../helpers';

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
    const config = {    
      year: 'numeric',
      month: '2-digit',
      day: 'numeric'
    };
    const blocksFormated = data.blocks.map(item => ({
      ...item,
      accounts: item.accounts?.map(account => ({
        ...account,
        totalPurchases: formatPrice(account.totalPurchases)
      })),
      transactions: item.transactions?.map(transaction => ({
        ...transaction,
        date: convertDate(transaction.date, config),
        amount: formatPrice(transaction.amount)
      }))
    }));
    const dataFormated = {
      id: data.id,
      title: data.title,
      blocks: blocksFormated
    }

    yield put({ type: InsightDetailsTypes.GET_INSIGHT_DETAILS_SUCCESS, payload: dataFormated });
  } catch (err) {
    yield put({
      type: InsightDetailsTypes.GET_INSIGHT_DETAILS_ERROR,
    });
  }
}

export default all([takeLatest(InsightDetailsTypes.GET_INSIGHT_DETAILS, getInsightDetails)]);