import React from 'react';
import { Link } from "react-router-dom";
import RouteNames from '../../shared/enums/routeNames.enum';
import Header from './Header';
// import { Container } from './styles';

const Insight: React.FC = () => {
  return (
    <div>
      <Header />
      <h1>PageInsight</h1>
      <Link to={RouteNames.insightDetails}>clique aqui</Link>
    </div>
  );
}

export default Insight;