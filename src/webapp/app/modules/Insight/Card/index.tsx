import React from 'react';
import image from '../../../images/teaser-image2.png';
import { Container, Date, Wrapper, Data, Title, SubTitle } from './styles';

const Card: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Data>
          <Date>
            <p>JAN 03</p>
          </Date>
          <Title>New Service</Title>
          <SubTitle>What is the new service?</SubTitle>
          <img src={image} />
        </Data>
      </Wrapper>
    </Container>
  );
}

export default Card;