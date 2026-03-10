import { ChakraProvider } from '@chakra-ui/react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppContextProvider } from './components/AppContext';
import { Layout } from './components/Layout';
import Conta from './pages/Conta';
import ContaInfo from './pages/ContaInfo';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/conta/:id" element={<Conta />} />
              <Route path="/infoconta" element={<ContaInfo />} />
            </Routes>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
