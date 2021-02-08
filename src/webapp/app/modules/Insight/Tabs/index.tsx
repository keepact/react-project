import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { InsightTypes } from '../../../shared/store/ducks/insight/types';

import { Tabs, Tab, Text, Wrapper, Separator } from './styles';

interface Props {
  unread: number;
  insightsSize: number;
}

const InsightTabs: React.FC<Props> = ({ unread, insightsSize }) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

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