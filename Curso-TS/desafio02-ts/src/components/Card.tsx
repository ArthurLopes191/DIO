import {
  Box,
  Flex
} from '@chakra-ui/react'

export const Card = ({children}: any) => {
  return (
    <>
      <Flex justifyContent="center">
        <Box maxW='lg' backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          {children}
        </Box>
      </Flex>
    </>

  )
}