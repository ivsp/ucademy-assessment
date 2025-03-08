import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #0a87bb;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #0abb87;
  }
`;
