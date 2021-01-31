// Action Types
export enum InsightTypes {
  GET_INSIGHT = '@insight/GET_INSIGHT',
  GET_INSIGHT_SUCCESS = '@insight/GET_INSIGHT_SUCCESS',
  GET_INSIGHT_ERROR = '@insight/GET_INSIGHT_ERROR',
}

// Data Types
export interface Insight {
  date: number;
  status: string;
  title: string;
  text: string;
  image: string;
  insightId: string
}

// State Type
export interface InsightState {
  readonly data: Insight[];
  readonly loading: boolean;
  readonly error: boolean;
}
