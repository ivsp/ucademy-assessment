import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Students from '../components/Students/students.page';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Students />} />
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
