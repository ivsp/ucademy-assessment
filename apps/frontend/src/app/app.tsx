import {
  antDesignTableStyle,
  antDesignThemeConfig,
} from './styles/global-styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Students from '../Pages/Students/students.page';
import { ConfigProvider } from 'antd';
import { AliasToken } from 'antd/es/theme/internal';
import Layout from './layout';
import Welcome from '../components/Welcome/welcome';

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
        <Layout>
          <Routes>
            <Route path="/" element={<Welcome />} />
          </Routes>
          <Routes>
            <Route path="/alumnos" element={<Students />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
