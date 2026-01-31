import {
  Box,
  Flex
} from '@chakra-ui/react'
import { login } from '../services/login'
import { LoginForm } from './LoginForm/LoginForm'

export const Card = () => {
  return (
    <>
      <Flex justifyContent="center">
        <Box maxW='lg' backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <LoginForm />
        </Box>
      </Flex>
    </>

  )
}