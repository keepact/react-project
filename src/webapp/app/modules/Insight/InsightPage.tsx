import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InsightTypes } from '../../shared/store/ducks/insight/types';
import { ApplicationState } from '../../shared/store';
// import { Link } from "react-router-dom";
// import RouteNames from '../../shared/enums/routeNames.enum';
import Header from './Header';
import Tabs from './Tabs';
import Card from './Card';

const Insight: React.FC = () => {
  const dispatch = useDispatch();

  const { insights } = useSelector(
    (state: ApplicationState) => state.insight,
  );
  
  useEffect(() => {
    if (!insights.length) {
      dispatch({ type: InsightTypes.GET_INSIGHT });
    }
  }, [dispatch]);

  return (
    <>
      <Header />
      <Tabs />
      <Card />
    </>
  );
}

export default Insight;