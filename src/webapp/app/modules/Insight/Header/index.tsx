import React from 'react';
import ThemeSwitcher from '../../../components/ThemeSwitch';
import { Container, Content, Title } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>INBOX</Title>
        <ThemeSwitcher />
      </Content>
    </Container>
  );
}

export default Header;