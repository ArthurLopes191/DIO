import { Box, Center, Input } from '@chakra-ui/react';

import { useState } from 'react';
import { Card } from '../components/Card';
import { CustomButton } from '../components/CustomButton/CustomButton';
import { login } from '../services/login';

const Home = () => {
    const [email, setEmail] = useState<string>('');
  return (
    <>
      <Box padding="25px">
        <Card>
          <Center>
            <h1>Faça o login</h1>
            {/* {userData?.name} */}
          </Center>
          <Input placeholder="email" value={email} onChange={event => setEmail(event.target.value)} marginTop="10px" />
          <Input placeholder="password" marginTop="10px" />
          <Center>
            <CustomButton title="Fazer Login" onClick={() => login(email)} />
          </Center>
        </Card>
      </Box>
    </>
  );
};

export default Home;
