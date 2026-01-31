import { Box, Heading } from '@chakra-ui/react'
import './Header.css'

export const Header  = () => {
  return(
    <Box width="100%" padding="4" className='header'>
      <Heading size="2xl" color='white' >Dio Bank</Heading>
    </Box>
  )
}
