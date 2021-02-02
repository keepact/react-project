import React from 'react';
import Loader from "react-loader-spinner";
import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <Loader
        type="Circles"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={33000}
      />
    </Container>
  )
}

export default Loading;