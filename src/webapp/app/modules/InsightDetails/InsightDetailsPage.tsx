import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../InsightDetails/Header';
import Title from './Title'
import Carousel from './Carousel';
import TransactionList from './TransactionList';
import { ApplicationState } from '../../shared/store';
import Loading from '../../components/Loading';

const InsightDetails: React.FC = () => {
  const { accounts, transactions, loading } = useSelector(
    (state: ApplicationState) => state.insightDetails,
  );

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Title text="Purchases on your cards in December added up to $19,184"/>
          <Carousel accounts={accounts}/>
          <TransactionList transactions={transactions}/>
        </>
      )}
    </>
  );
}

export default InsightDetails;