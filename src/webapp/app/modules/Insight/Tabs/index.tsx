import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InsightTypes } from '../../../shared/store/ducks/insight/types';
import { ApplicationState } from '../../../shared/store';

import { Tabs, Tab, Text, Wrapper, Separator } from './styles';

const InsightTabs: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const { insights, unread } = useSelector(
    (state: ApplicationState) => state.insight,
  );
  const insightsSize = insights.length;

  const handleFilterUnread = () => {
    setChecked(true);
    dispatch({ type: InsightTypes.FILTER_UNREAD });
  }

  const handleFilterAll = () => {
    setChecked(false);
    dispatch({ type: InsightTypes.FILTER_ALL });
  }

  return (
    <Tabs>
      <Wrapper>
        <button onClick={handleFilterAll}>
          <Tab>
            <Text checked={checked}>All Insights ({`${insightsSize}`})</Text>
          </Tab>          
        </button>
        <Separator checked={checked}/>
      </Wrapper>
      <Wrapper>
        <button onClick={handleFilterUnread} disabled={unread === 0}>
          <Tab>
            <Text checked={!checked}>Unread Insights ({`${unread}`})</Text>
          </Tab>
        </button>
        <Separator checked={!checked}/>
      </Wrapper>
    </Tabs>
  );
}

export default InsightTabs;