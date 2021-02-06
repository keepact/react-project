import produce, { Draft } from 'immer';
import { Reducer } from 'redux';
import { InsightDetails, InsightDetailsTypes, InsightDetailsState, Transaction } from './types';

const INITIAL_STATE: InsightDetailsState = {
  data: {
    blocks: [],
    id: undefined,
    title: ''
  },
  error: false,
  loading: false,
  transactions: [],
  accounts: []
};

type InsightDetailsAction = {
  type: InsightDetailsTypes;
  payload: InsightDetails;
};

export const reducer: Reducer<InsightDetailsState, InsightDetailsAction> = (
  state = INITIAL_STATE,
  action,
) => {
  return produce<InsightDetailsState>(state, (draft: Draft<InsightDetailsState>) => {
    switch (action.type) {
      case InsightDetailsTypes.GET_INSIGHT_DETAILS: {
        draft.loading = true;
        break;
      }
      case InsightDetailsTypes.GET_INSIGHT_DETAILS_SUCCESS: {
        const insightDetails = action.payload;
        const transactions = insightDetails.blocks[1] 
          ? insightDetails.blocks[1].transactions.filter(
              transaction => transaction.accountId === '1'
            ) 
          : insightDetails.blocks[0].transactions;
        const accounts = insightDetails.blocks[0]?.accounts;
        
        draft.data = insightDetails;
        draft.accounts = accounts;
        draft.transactions = transactions;
        draft.loading = false;
        draft.error = false;
      }
      case InsightDetailsTypes.GET_INSIGHT_DETAILS_ERROR: {
        draft.loading = false;
        draft.error = true;
        break;
      }
      case InsightDetailsTypes.GET_INSIGHT_DETAILS_FILTER: {
        const accountId = action.payload.id;
        draft.transactions = draft.data.blocks[1].transactions.filter(
          transaction => transaction.accountId === String(accountId + 1)
        );
        break;
      }
      default:
        return state;
    }
    return undefined;
  });
};

export default reducer;
