import React from 'react';
import { Content, Container, Left, Right, Wrapper } from './styles';
import { Transaction } from '../../../shared/store/ducks/insight-details/types';

interface Props {
  transactions: Transaction[];
}

const TransactionList: React.FC<Props> = ({ transactions }) => {
  return (
    <Content>
      {transactions?.map(transaction => (
        <Container key={transaction.date}>
          <Wrapper>
            <Left>
              <p>{transaction.merchantName}</p>
              <span>{transaction.date}</span>
            </Left>
            <Right>
              <p>-${transaction.amount}</p>
            </Right>
          </Wrapper>
        </Container>      
      ))}
    </Content>
  );
}

export default TransactionList;