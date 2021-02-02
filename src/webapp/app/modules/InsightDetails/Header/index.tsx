import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import ThemeSwitcher from '../../../components/ThemeSwitch';
import { Container, Content, Title } from './styles';
import RouteNames from '../../../shared/enums/routeNames.enum';
import { ApplicationState } from '../../../shared/store';

const Header: React.FC = () => {
  const { data, error, loading } = useSelector(
    (state: ApplicationState) => state.insightDetails,
  );

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
        <Title>{data.title}</Title>
        <ThemeSwitcher />
      </Content>
    </Container>
  );
}

export default Header;