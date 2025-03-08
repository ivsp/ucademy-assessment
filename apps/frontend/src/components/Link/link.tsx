import React from 'react';
import { StyledLink } from './styles';

interface CustomLinkProps {
  to: { pathname: string };
  children: React.ReactNode;
}

export default function CustomLink({ to, children }: CustomLinkProps) {
  return <StyledLink to={to}>{children}</StyledLink>;
}
