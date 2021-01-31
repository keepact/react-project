import React from 'react';
// import { Link } from "react-router-dom";
// import RouteNames from '../../shared/enums/routeNames.enum';
import Header from './Header';
import Tabs from './Tabs';
import Card from './Card';

const Insight: React.FC = () => {
  return (
    <>
      <Header />
      <Tabs />
      <Card />
    </>
  );
}

export default Insight;