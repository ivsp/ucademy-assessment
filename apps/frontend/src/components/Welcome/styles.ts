import styled from 'styled-components';

export const WelcomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  text-align: center;
  background-color: #f9fbff;
  padding: 0px;
`;

export const Content = styled.div`
  max-width: 600px;
  padding: 40px;
  border-radius: 16px;
  backdrop-filter: blur(10px);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #0abb87, #0a87bb);
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  opacity: 0.9;
`;

export const Description = styled.p`
  font-size: 16px;
  margin: 20px 0;
  opacity: 0.8;
`;

export const StartButton = styled.button`
  background-color: white;
  color: #0abb87;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;
