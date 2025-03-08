import React from 'react';
import Menu from '../components/Menu/menu';
import { Container, MainContent } from './styles/layout.styles';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Menu />
      <MainContent>{children}</MainContent>
    </Container>
  );
}
