import {
  antDesignTableStyle,
  antDesignThemeConfig,
} from './styles/global-styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Students from '../Pages/Students/students.page';
import { ConfigProvider } from 'antd';
import { AliasToken } from 'antd/es/theme/internal';

export function App() {
  return (
    <ConfigProvider
      theme={{
        token: antDesignThemeConfig,
        components: {
          Table: { antDesignTableStyle } as Partial<AliasToken>,
        },
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
