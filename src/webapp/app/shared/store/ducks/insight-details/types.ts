// Action Types
export enum InsightDetailsTypes {
  GET_INSIGHT_DETAILS = '@insightDetails/GET_INSIGHT_DETAILS',
  GET_INSIGHT_DETAILS_SUCCESS = '@insightDetails/GET_INSIGHT_DETAILS_SUCCESS',
  GET_INSIGHT_DETAILS_ERROR = '@insightDetails/GET_INSIGHT_DETAILS_ERROR',
  GET_INSIGHT_DETAILS_FILTER = '@insightDetails/GET_INSIGHT_DETAILS_FILTER'
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
export interface Transaction {
  accountId: string;
  id?: number;
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
  readonly transactions: Transaction[];
  readonly accounts: Account[];
}
