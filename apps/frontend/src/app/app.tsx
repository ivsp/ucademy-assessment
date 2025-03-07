import { antDesignThemeConfig } from './styles/global-styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Students from '../Pages/Students/students.page';
import { ConfigProvider } from 'antd';

export function App() {
  return (
    <ConfigProvider
      theme={{
        token: antDesignThemeConfig,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Students />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
