import styled from 'styled-components';
import { Button } from 'antd';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: Poppins, sans-serif;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 16px;
`;

export const Tab = styled.div`
  font-weight: bold;
  position: relative;
  padding-bottom: 2px;

  &::after {
    content: '';
    position: absolute;
    width: 110%;
    height: 3px;
    background-color: #0abb87;
    bottom: 15px;
    left: -2px;
  }
`;

export const EditButton = styled(Button)`
  background-color: #0abb87;
  color: white;
  border: none;
  &:hover {
    background-color: #089b6f;
  }
`;

export const ProfileImage = styled.div`
  margin: 30px 0;
`;

export const InfoSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  & > *:first-child {
    align-items: flex-start;
    & svg {
      padding-top: 5px;
    }
  }
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  gap: 10px;
  font-size: 16px;
  color: #262d34;
  font-weight: 400;
  width: fit-content;
`;

export const InfoData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: ligth;
  min-width: 130px;
  & > * {
    width: 100%;
  }
  & > *:first-child {
    font-size: 12px;
  }

  & > :nth-child(3) {
    padding-top: 15px;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  padding-top: 16px;
`;

export const StatusSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  font-weight: bold;
`;

export const CloseButton = styled(Button)`
  border-radius: 5px;
  color: #262d34;
  font-weight: bold;
  border: solid 1px #262d34;
  &:hover {
    color: #262d34 !important;
    border: solid 1px #262d34 !important;
  }
`;
