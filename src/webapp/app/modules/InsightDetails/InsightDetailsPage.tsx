import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../shared/store';
import Header from '../InsightDetails/Header';
import Title from './Title'
import Slider from './Slider';
import TransactionList from './TransactionList';
import Loading from '../../components/Loading';

const InsightDetails: React.FC = () => {
  const { data: { title }, accounts, transactions, loading } = useSelector(
    (state: ApplicationState) => state.insightDetails,
  );

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header title={title}/>
          <Title text="Purchases on your cards in December added up to $19,184"/>
          <Slider accounts={accounts}/>
          <TransactionList transactions={transactions}/>
        </>
      )}
    </>
  );
}

export default InsightDetails;