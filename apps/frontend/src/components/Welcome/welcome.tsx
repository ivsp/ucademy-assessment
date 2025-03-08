import React from 'react';
import {
  Content,
  Description,
  StartButton,
  Subtitle,
  Title,
  WelcomeContainer,
} from './styles';
import CustomLink from '../Link/link';

export default function Welcome() {
  return (
    <WelcomeContainer>
      <Content>
        <Title>
          <span role="img" aria-label="">
            🚀
          </span>{' '}
          Bienvenido a Ucademy
        </Title>
        <Subtitle>
          Tu plataforma de gestión académica moderna y eficiente.
        </Subtitle>
        <Description>
          Organiza tus estudiantes, cursos y mucho más con una experiencia
          intuitiva y fluida.
        </Description>
        <CustomLink
          to={{
            pathname: '/alumnos',
          }}
        >
          <StartButton>Empezar</StartButton>
        </CustomLink>
      </Content>
    </WelcomeContainer>
  );
}
