import {
    Box,
    Center,
    Input,
} from '@chakra-ui/react'
import { CustomButton } from '../CustomButton/CustomButton'
import { login } from '../../services/login'

export const LoginForm = () => {
    return (
        <Box padding='15px'>
            <Center>
                <h1>Faça o login</h1>
            </Center>
            <Input placeholder="email" marginTop='10px'/>
            <Input placeholder="password" marginTop='10px'/>
            <Center>
                <CustomButton title='Fazer Login' event={login}/>
            </Center>
        </Box>
    )
}