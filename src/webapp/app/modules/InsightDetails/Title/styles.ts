import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.secundary};
  height: 180px;
  padding: 5px 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 34px;
  font-weight: bold;
  text-align: left;
`;
