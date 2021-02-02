import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InsightTypes } from '../../shared/store/ducks/insight/types';
import { ApplicationState } from '../../shared/store';
import Header from './Header';
import Tabs from './Tabs';
import Card from './Card';
import Loading from '../../components/Loading';

const Insight: React.FC = () => {
  const dispatch = useDispatch();

  const { insights, loading } = useSelector(
    (state: ApplicationState) => state.insight,
  );
  
  useEffect(() => {
    if (!insights.length) {
      dispatch({ type: InsightTypes.GET_INSIGHT });
    }
  }, [dispatch]);

  return (
    <>
    {loading ? (
      <Loading />
    ) : (
    <>
      <Header />
      <Tabs />
      <Card />
    </>
    )
  }
  </>
  )};


export default Insight;