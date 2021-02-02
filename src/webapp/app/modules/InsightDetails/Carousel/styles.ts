import styled from 'styled-components';

export const Container = styled.div`
  height: 220px;
  padding: 10px 20px;

  .carousel-root {
    max-width: 350px;
  }

  .carousel {
    .slide {
      min-width: 100%;
      margin: 0;
      position: relative;
      text-align: center;
      background: transparent;
    }

    .control-prev.control-arrow:before {
      border-right: 8px solid gray;
    }

    .control-next.control-arrow:before {
      border-left: 8px solid gray;
    }

    .control-arrow:hover {
      background: none !important;
    }
  }
  
  .control-dots {
    display: none;
  }
`;

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.secundary};
  display: flex;
  justify-content: center;
  width: 100%;
  height: 200px;
  padding: 15px;
`;

export const CarouselItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  height: 150px;
  flex-direction: column;
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;

  div:last-child {
    display: flex;
    flex-direction: column;
  }

  span {
    padding: 5px 0;
    color: ${(props) => props.theme.colors.text.primary};
  }

  img {
    height: 50px;
  }
`;

export const Column2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Total = styled.div`
  padding: 5px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 5px;

  p {
    font-weight: bold;
    font-size: 18px;
    text-align: left;
    color: ${(props) => props.theme.colors.text.primary};
  }
  span {
    font-weight: bold;
    text-transform: capitalize;
    color: ${(props) => props.theme.colors.text.primary};
  }
`;

export const Type = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${(props) => props.theme.colors.text.secundary};
`; 
