import React from 'react';

import { Tabs, Tab, Text, Wrapper, Separator } from './styles';

const InsightTabs: React.FC = () => {
  return (
    <Tabs>
      <Wrapper>
        <Tab>
          <Text checked={false}>All Insights (1)</Text>
        </Tab>
        <Separator checked={false}/>
      </Wrapper>
      <Wrapper>
        <Tab>
          <Text checked>Unread Insights</Text>
        </Tab>
        <Separator checked/>
      </Wrapper>
    </Tabs>
  );
}

export default InsightTabs;