import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Date as DateComponent, Wrapper, Data, Title, SubTitle } from './styles';
import { ApplicationState } from '../../../shared/store';

const Card: React.FC = () => {
  const { data: insights, error, loading } = useSelector(
    (state: ApplicationState) => state.insight,
  );

  return (
    <>
    {insights.map(insight => (
      <Container key={insight.insightId}>
        <Wrapper>
          <Data>
            <DateComponent>
              <p>{insight.date}</p>
            </DateComponent>
            <Title>{insight.title}</Title>
            <SubTitle>{insight.text}</SubTitle>
            <img src={require(`../../../images/${insight.image}.png`).default} />
          </Data>
        </Wrapper>
      </Container>    
    ))}
    </>
  );
}

export default Card;