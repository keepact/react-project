import React from 'react';
import ThemeSwitcher from '../ThemeSwitch/index';
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