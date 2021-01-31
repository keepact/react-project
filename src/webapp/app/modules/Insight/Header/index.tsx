import React from 'react';
import ThemeSwitcher from '../../../components/ThemeSwitch';
import { Container, Content } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <ThemeSwitcher />
      </Content>
    </Container>
  );
}

export default Header;