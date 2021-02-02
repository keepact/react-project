import styled from 'styled-components';

export const Content = styled.div`
  box-shadow: 10px 10px 50px 1px rgba(0,0,0,.2);
  height: 100%;
  width: 100%;
  padding: 0 2px;
`;

export const Container = styled.div`
  padding: 5px 20px;
`;

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.secundary};
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 15px;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 16px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.text.secundary};
  }

  span {
    font-size: 14px;
    font-weight: normal;
    color: ${(props) => props.theme.colors.text.secundary}
  }
`;

export const Left = styled.div`
  color: ${(props) => props.theme.colors.text.primary};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  p {
    font-size: 16px;
    font-weight: bold;
  }
`;
