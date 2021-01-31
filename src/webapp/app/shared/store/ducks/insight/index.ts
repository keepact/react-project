import produce, { Draft } from 'immer';
import { Reducer } from 'redux';
import { Insight, InsightState, InsightTypes } from './types';

const INITIAL_STATE: InsightState = {
  data: [],
  error: false,
  loading: false,
};

export type InsightAction = {
  type: InsightTypes;
  payload: Insight[];
};

export const reducer: Reducer<InsightState, InsightAction> = (
  state = INITIAL_STATE,
  action,
) => {
  return produce<InsightState>(state, (draft: Draft<InsightState>) => {
    switch (action.type) {
      case InsightTypes.GET_INSIGHT: {
        draft.loading = true;
        break;
      }
      case InsightTypes.GET_INSIGHT_SUCCESS: {
        const insight = action.payload;
        draft.data = insight;
        draft.loading = false;
        draft.error = false;
      }
      case InsightTypes.GET_INSIGHT_ERROR: {
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
