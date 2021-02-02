import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../InsightDetails/Header';
import Title from './Title'
import Carousel from './Carousel';
import TransactionList from './TransactionList';
import { ApplicationState } from '../../shared/store';
import Loading from '../../components/Loading';

const InsightDetails: React.FC = () => {
  const { data, error, loading } = useSelector(
    (state: ApplicationState) => state.insightDetails,
  );

  const accounts = data.blocks[0]?.accounts;
  const transactions = data.blocks[accounts?.length ? 1 : 0]?.transactions;
  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Title text="Purchases on your cards in December added up to $19,184"/>
          <Carousel accounts={accounts}/>
          <TransactionList transactions={transactions}/>
        </>
      )}
    </>
  );
}

export default InsightDetails;