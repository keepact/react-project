
import styled from 'styled-components';

export const Container = styled.header`
  background: ${(props) => props.theme.colors.secundary};
  box-shadow: 0 0 50px 0 rgba(0,0,0,.2);
  height: 50px;
  padding: 0 30px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  max-width: 1440px;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 18px;
  color: ${(props) => props.theme.colors.text.primary};
  letter-spacing: 1.2px;
  text-align: left;
`;