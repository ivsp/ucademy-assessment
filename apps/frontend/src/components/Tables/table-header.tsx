import styled from 'styled-components';

interface TableHeaderProps {
  children: React.ReactNode;
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function TableHeader({ children }: TableHeaderProps) {
  return <Header>{children}</Header>;
}
