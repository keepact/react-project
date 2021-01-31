import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RouteNames from '../shared/enums/routeNames.enum';

import Insight from '../modules/Insight/InsightPage';
import InsightDetails from '../modules/InsightDetails/InsightDetailsPage';

export const Routes: React.FC = () => (
  <Switch>
    <Route path={RouteNames.insight} exact component={Insight} />
    <Route path={RouteNames.insightDetails} component={InsightDetails} />
  </Switch>
);
