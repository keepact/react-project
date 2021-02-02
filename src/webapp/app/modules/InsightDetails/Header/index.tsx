import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import ThemeSwitcher from '../../../components/ThemeSwitch';
import { Container, Content, Title } from './styles';
import RouteNames from '../../../shared/enums/routeNames.enum';

const Header: React.FC = () => {
  const history = useHistory();
  const handleChangePage = () => {
    history.push({ pathname: RouteNames.insight });
  }
  return (
    <Container>
      <Content>
        <button type="button" onClick={handleChangePage}>
          <FiArrowLeft />
        </button>
        <Title>Spending Analysis</Title>
        <ThemeSwitcher />
      </Content>
    </Container>
  );
}

export default Header;