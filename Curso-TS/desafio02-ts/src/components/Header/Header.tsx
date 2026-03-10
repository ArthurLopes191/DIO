import { Box, Center, Text } from '@chakra-ui/react';

import { useContext } from 'react';

import { AppContext } from '../AppContext';
import './Header.css';

export const Header = () => {
  
  const context = useContext(AppContext)

  return (
    <Box backgroundColor="orange" >
      <Center>
        <Text fontSize="3xl">Dio Bank</Text>
      </Center>
    </Box>
  );
};
