
import { combineReducers } from 'redux';

import insight from './insight';
import insightDetails from './insight-details';

export default combineReducers({
  insight,
  insightDetails,
});