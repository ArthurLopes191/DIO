import {
    Button
} from '@chakra-ui/react'
import { MouseEventHandler } from 'react'

interface IButton {
    title: string,
    onClick: MouseEventHandler
}

export const CustomButton = ({title, onClick} : IButton) => {
    return (
        <Button colorScheme='orange' onClick={onClick} size='sm' width='100%' marginTop='5px'>
            {title}
          </Button>
    )
}