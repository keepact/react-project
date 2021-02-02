// Action Types
export enum InsightDetailsTypes {
  GET_INSIGHT_DETAILS = '@insightDetails/GET_INSIGHT_DETAILS',
  GET_INSIGHT_DETAILS_SUCCESS = '@insight/GET_INSIGHT_DETAILS_SUCCESS',
  GET_INSIGHT_DETAILS_ERROR = '@insight/GET_INSIGHT_DETAILS_ERROR'
}

export interface InsightDetails {
  title: string;
  id: string;
  blocks: Block[];
}

interface Block {
  id: string;
  type: string;
  transactions?: Transaction[];
  accounts?: Account[]
}

export interface Account {
  id: string;
  totalPurchases: number;
  image: string;
  type: string;
}
// Data Types
interface Transaction {
  accountId: string;
  category: string;
  merchantName: string;
  date: number;
  amount: number;
}

// State Type
export interface InsightDetailsState {
  readonly data: InsightDetails;
  readonly loading: boolean;
  readonly error: boolean;
}
