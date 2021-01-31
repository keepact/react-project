import produce, { Draft } from 'immer';
import { Reducer } from 'redux';
import { InsightDetails, InsightDetailsTypes, InsightDetailsState } from './types';

const INITIAL_STATE: InsightDetailsState = {
  data: {
    blocks: [],
    id: undefined,
    title: ''
  },
  error: false,
  loading: false,
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
        draft.data = insightDetails;
        draft.loading = false;
        draft.error = false;
      }
      case InsightDetailsTypes.GET_INSIGHT_DETAILS_ERROR: {
        draft.loading = false;
        draft.error = true;
        break;
      }
      default:
        return state;
    }
    return undefined;
  });
};

export default reducer;
