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

  const { insights: pristine, data: insights, loading, unread } = useSelector(
    (state: ApplicationState) => state.insight,
  );
  const insightsPrestine = pristine.length;
  
  useEffect(() => {
    if (!insightsPrestine) {
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
            <Tabs unread={unread} insightsSize={insightsPrestine}/>
            <Card insights={insights}/>
          </>
        )
      }
    </>
  )};


export default Insight;