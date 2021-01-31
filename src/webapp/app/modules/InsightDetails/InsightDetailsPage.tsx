import React from 'react';
import { Link } from "react-router-dom";
import RouteNames from '../../shared/enums/routeNames.enum';
// import { Container } from './styles';

const InsightDetails: React.FC = () => {
  return (
    <div>
      <h1>PageInsightDetails</h1>
      <Link to={RouteNames.insight}>clique aqui</Link>
    </div>
  );
}

export default InsightDetails;