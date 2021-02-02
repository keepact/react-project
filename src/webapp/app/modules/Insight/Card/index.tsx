import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Date as DateComponent, Wrapper, Data, Title, SubTitle } from './styles';
import { ApplicationState } from '../../../shared/store';
import { InsightDetailsTypes } from '../../../shared/store/ducks/insight-details/types';
import RouteNames from '../../../shared/enums/routeNames.enum';
import Loading from '../../../components/Loading';

const Card: React.FC = () => {
  const { data: insights, error, loading } = useSelector(
    (state: ApplicationState) => state.insight,
  );

  const dispatch = useDispatch();
  const history = useHistory();
  const handleChangePage = (id: string): void => {
    dispatch({ 
      type: InsightDetailsTypes.GET_INSIGHT_DETAILS, 
      payload: { id } 
    });
    history.push({ pathname: RouteNames.insightDetails, search: `?id=${id}` })
  }

  return (
    <>
      {insights.map(insight => (
        <Container key={insight.insightId}>
          <Wrapper>
          <button type="button" onClick={() => handleChangePage(insight.insightId)}>
            <Data>
              <DateComponent>
                <p>{insight.date}</p>
              </DateComponent>
              <Title>{insight.title}</Title>
              <SubTitle>{insight.text}</SubTitle>
              <img src={require(`../../../images/${insight.image}.png`).default} />
            </Data>
          </button>
          </Wrapper>
        </Container>    
      ))}
    </>
  );
}

export default Card;