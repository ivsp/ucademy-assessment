import styled from 'styled-components';

export const Sidebar = styled.div`
  width: 250px;
  background-color: #fff;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: flex-start;
  gap: 50px;
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 16px;
`;

export const NotificationContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  transition: background 0.2s ease-in-out;
  font-family: Poppins, sans-seriff;
  text-decoration: none;
  color: #000;
  &:hover {
    background: #f5f5f5;
  }
  & > * {
    font-family: Poppins, sans-seriff;
    font-weight: bold;
    cursor: pointer;
  }
`;
