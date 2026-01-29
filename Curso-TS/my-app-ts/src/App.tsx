import { Box, Button, Center, Input } from '@chakra-ui/react';
import { Provider } from './components/ui/provider';

function App() {
  return (
    <Provider>
      <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px">
        <Box backgroundColor="#FFFFFF" borderRadius="25px" color="black" padding="5px">
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Button colorScheme='teal' size='sm' width='100%' marginTop='5px'>
            Entrar
          </Button>
        </Box>
      </Box>
    </Provider>
  );
}

export default App;
