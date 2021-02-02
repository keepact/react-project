import styled from 'styled-components';

interface Props {
  checked: boolean;
}

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
  padding: 0 10px;
  margin-top: 10px;
`;

export const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  padding: 10px;
`;

export const Separator = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  height: 4px;
  opacity: ${(props: Props) => props.checked ? 0.3 : 1 };
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 100%;
  height: 35px;
`;

export const Text = styled.h3`
  font-weight: bold;
  font-size: 16px;
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.text.secundary};
  opacity: ${(props: Props) => props.checked ? 0.3 : 1 };
  margin-bottom: 3px;
`;