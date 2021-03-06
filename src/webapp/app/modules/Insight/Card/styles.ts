import styled from 'styled-components';

export const Content = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;


export const Container = styled.div`
  height: 220px;
  padding: 5px 20px;
`;

export const ImageContainer = styled.div`
  max-width: 350px;
  max-height: 200px;
  margin: 15px auto;

  img {
    display: block;
    max-width: 100%;
  }
`;

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.secundary};
  display: flex;
  justify-content: center;
  width: 100%;
  height: 200px;
  padding: 15px;
  box-shadow: 10px 10px 50px 1px rgba(0,0,0,.2);

  button {
    width: 100%;
  }
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h4`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  text-transform: capitalize;
`;

export const SubTitle = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text.primary};
  text-align: left;
  text-transform: capitalize;
`;

export const Date = styled.div`
  display: flex;
  &::before {
    content: '';
    background-color: #646666;
    border-radius: 10px;
    height: 6px;
    width: 6px;
    margin-top: 5px;
  }

  p {
    font-size: 14px;
    color: ${(props) => props.theme.colors.text.primary};
    padding: 0 4px;
  }
`;