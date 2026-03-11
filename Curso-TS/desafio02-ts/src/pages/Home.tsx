import { Box, Center, Input } from '@chakra-ui/react';

import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../components/AppContext';
import { Card } from '../components/Card';
import { CustomButton } from '../components/CustomButton/CustomButton';
import { login } from '../services/login';

const Home = () => {
    const [email, setEmail] = useState<string>('');
    const {setIsLoggedIn} = useContext(AppContext);
    const navigate = useNavigate()

    const validateUser = async (email: string) => {
        const loggedIn = await login(email)

        if(!loggedIn){
            return alert('Email inválido')
        }

        setIsLoggedIn(true)
        navigate('/conta/1')
    }

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
            <CustomButton title="Fazer Login" onClick={() => validateUser(email)} />
          </Center>
        </Card>
      </Box>
    </>
  );
};

export default Home;
