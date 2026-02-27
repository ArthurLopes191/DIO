import {
    Box,
    Center,
    Input,
} from '@chakra-ui/react'
import { useState } from 'react'
import { login } from '../../services/login'
import { CustomButton } from '../CustomButton/CustomButton'

export const LoginForm = () => {
    const [email, setEmail] = useState<string>('');

    return (
        <Box padding='15px'>
            {/* {userData === null || userData === undefined ? <h1>Loading...</h1> : <h1>Informações carregadas</h1>} */}
            <Center>
                <h1>Faça o login</h1>
                {/* {userData?.name} */}
            </Center>
            <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} marginTop='10px'/>
            <Input placeholder="password" marginTop='10px'/>
            <Center>
                <CustomButton title='Fazer Login' onClick={() => login(email)}/>
            </Center>
        </Box>
    )
}