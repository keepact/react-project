import React from 'react';
import { Carousel as Slider } from 'react-responsive-carousel';
import { Container, Wrapper, CarouselItem, Column, Column2, Total, Type } from './styles';

interface Props {
  accounts: any[];
}

const Carousel: React.FC<Props> = ({ accounts }) => {
  return (
    <>
      {accounts && (
        <Container>
          <Wrapper>
            <Slider>
              {accounts.map(account => (
              <CarouselItem key={account.id}>
                <Column>
                  <div>
                    <img src={require(`../../../images/account-selector-${account.image}.svg`).default} />
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
              </CarouselItem>
              ))}
            </Slider>
          </Wrapper>
        </Container>
      )}
    </>
  );
}

export default Carousel;