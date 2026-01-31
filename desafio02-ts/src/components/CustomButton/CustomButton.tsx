import { 
  Button
} from '@chakra-ui/react'

interface IButton {
    title: string,
    event: () => void
}

export const CustomButton = ({title, event} : IButton) => {
    return (
        <Button colorScheme='orange' onClick={event} size='sm' width='100%' marginTop='5px'>
            {title}
          </Button>
    )
}