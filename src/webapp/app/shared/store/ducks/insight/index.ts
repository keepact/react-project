import produce, { Draft } from 'immer';
import { Reducer } from 'redux';
import { Insight, InsightState, InsightTypes } from './types';

const INITIAL_STATE: InsightState = {
  insights: [],
  error: false,
  loading: false,
  insightsPristine: [],
  unread: 0,
  insightsSize: 0
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
        const insights = action.payload;
        draft.insights = insights;
        draft.insightsPristine = insights;
        draft.insightsSize = insights.length;
        draft.unread = insights.filter(item => item.status === 'unread').length;
        draft.loading = false;
        draft.error = false;
        break;
      }
      case InsightTypes.GET_INSIGHT_ERROR: {
        draft.loading = false;
        draft.error = true;
        break;
      }
      case InsightTypes.FILTER_UNREAD: {
        draft.insights = draft.insightsPristine.filter(item => item.status === 'unread');
        draft.unread = 0;
        break;
      }
      case InsightTypes.FILTER_ALL: {
        draft.insights = draft.insightsPristine;
        break;
      }
      default:
        return state;
    }
    return undefined;
  });
};

export default reducer;
