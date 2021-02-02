import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../InsightDetails/Header';
import Title from './Title'
import Carousel from './Carousel';
import { ApplicationState } from '../../shared/store';
// import { Container } from './styles';

const InsightDetails: React.FC = () => {
  const { data, error, loading } = useSelector(
    (state: ApplicationState) => state.insightDetails,
  );

  const accounts = data.blocks[0]?.accounts;
  return (
    <>
      <Header />
      <Title text="Purchases on your cards in December added up to $19,184"/>
      <Carousel accounts={accounts}/>
    </>
  );
}

export default InsightDetails;