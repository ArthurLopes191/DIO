import { Box, ChakraProvider } from "@chakra-ui/react"
import { Header } from "../components/Header/Header"
import { Card } from "../components/Card"

const Home = () => {
    return (
        <>
            <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
                <Card />
            </Box>
        </>
    )
}

export default Home