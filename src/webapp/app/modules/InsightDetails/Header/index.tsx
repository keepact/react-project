import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import ThemeSwitcher from '../../../components/ThemeSwitch';
import { Container, Content, Title } from './styles';
import RouteNames from '../../../shared/enums/routeNames.enum';
import { InsightTypes } from '../../../shared/store/ducks/insight/types';

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChangePage = () => {
    dispatch({ type: InsightTypes.FILTER_ALL });
    history.push({ pathname: RouteNames.insight });
  }
  return (
    <Container>
      <Content>
        <button type="button" onClick={handleChangePage}>
          <FiArrowLeft />
        </button>
        <Title>{title}</Title>
        <ThemeSwitcher />
      </Content>
    </Container>
  );
}

export default Header;