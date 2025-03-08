import styled from 'styled-components';

export const Image = styled.img<{ width: string }>`
  width: 100%;
  width: ${({ width }) => width};
  height: auto;
  object-fit: cover;
  border-radius: 8px; /* Opcional: Bordes redondeados */
`;
