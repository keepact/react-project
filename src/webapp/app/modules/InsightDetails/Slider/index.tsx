import React from 'react';
import { useDispatch } from 'react-redux';
import { Carousel as Slider } from 'react-responsive-carousel';
import { Account, InsightDetailsTypes } from '../../../shared/store/ducks/insight-details/types';
import { Container, Wrapper, SliderItem, Column, Column2, Total, Type } from './styles';

interface Props {
  accounts: Account[];
}

const Carousel: React.FC<Props> = ({ accounts }) => {
  const dispatch = useDispatch();

  const handleChange = (id: number): void => {
    dispatch({ 
      type: InsightDetailsTypes.GET_INSIGHT_DETAILS_FILTER, 
      payload: { id } 
    });
  };

  return (
    <>
      {accounts && (
        <Container>
          <Wrapper>
            <Slider showThumbs={false} onChange={handleChange}>
              {accounts.map(account => (
              <SliderItem key={account.id}>
                <Column>
                  <div>
                    <img src={require(`../../../../public/images/account-selector-${account.image}.svg`).default} />
                  </div>
                  <div>
                    <span>Checking Account</span>
                    <Type>{account.type}</Type>
                  </div>
                </Column>
                <Column2>
                  <Total>
                    <p>
                      Total Cash Flow: {`${account.totalPurchases}`}
                    </p>
                  </Total>
                </Column2>            
              </SliderItem>
              ))}
            </Slider>
          </Wrapper>
        </Container>
      )}
    </>
  );
}

export default Carousel;