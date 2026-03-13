import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../api"
import { AppContext } from "../components/AppContext"
import CardInfo from "../components/CardInfo"

interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

export const Perfil = () => {
    const [userData, setUserData] = useState<null | UserData>()
    const {id} = useParams()
    const navigate = useNavigate()

    const {isLoggedIn} = useContext(AppContext)

    !isLoggedIn && navigate('/')

    useEffect(() => {
        const getData = async() => {
            const data: any | UserData = await api
            setUserData(data)
        }
        getData()
    }, [])


    if(userData && id !== userData.id) {
        navigate('/')
    }


    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {
                    userData === undefined || userData === null ?
                    (  
                        <Center>
                            <Spinner size='xl' color='white'/>
                        </Center>
                    ) : 
                    (
                        <>
                            <CardInfo mainContent="Nome" content={userData.name} showButton buttonText="Voltar" onButtonClick={() => navigate(`/conta/${id}`)} />
                            <CardInfo mainContent="Email" content={userData.email} />
                        </>
                    )
                }
            </SimpleGrid>    
        </Center>
    )
}