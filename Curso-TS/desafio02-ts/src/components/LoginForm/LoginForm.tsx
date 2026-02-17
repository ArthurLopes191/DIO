import {
    Box,
    Center,
    Input,
} from '@chakra-ui/react'
import { CustomButton } from '../CustomButton/CustomButton'
import { login } from '../../services/login'
import { useState, useEffect } from 'react'
import {api } from '../../api'

interface UserData {
    email: string
    password: string
    name: string
}

export const LoginForm = () => {
    const [email, setEmail] = useState<string>('');
    const [userData, setUserData] = useState<null | UserData>()

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }
      getData()  
    }, [ ])

    console.log(userData)

    return (
        <Box padding='15px'>
            {userData === null || userData === undefined && <h1>Loading...</h1>}
            <Center>
                <h1>Faça o login</h1>
                {userData?.name}
            </Center>
            <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} marginTop='10px'/>
            <Input placeholder="password" marginTop='10px'/>
            <Center>
                <CustomButton title='Fazer Login' onClick={() => login(email)}/>
            </Center>
        </Box>
    )
}