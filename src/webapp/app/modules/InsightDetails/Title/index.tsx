import React from 'react';
import { Container, Wrapper, Title as Text } from './styles';

interface Props {
  text: string;
}

const Title: React.FC<Props> = ({ text }) => {
  return (
    <Container>
      <Wrapper>
        <Text>{text}</Text>
      </Wrapper>
    </Container>    
  );
}

export default Title;