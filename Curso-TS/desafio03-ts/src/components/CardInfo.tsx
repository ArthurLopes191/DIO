import { Box, Button, Text } from "@chakra-ui/react";

interface ICardInfo {
    mainContent: string;
    content: string;
    showButton?: boolean;
    buttonText?: string;
    onButtonClick?: () => void;
}

const CardInfo = ({ mainContent, content, showButton = false, buttonText, onButtonClick}: ICardInfo) => {
  return (
    <Box 
        backgroundColor="white" 
        minHeight="120px" 
        padding={8}
        borderRadius="25px"
    >
        <Text fontSize='2xl' fontWeight='bold'>
            { mainContent }
        </Text>
        <Text fontSize='xl'>
            { content }
        </Text>
        { showButton && onButtonClick && (
            <Button mt={4} colorScheme="orange" onClick={onButtonClick}>
                {buttonText}
            </Button>
        ) 
             
        }
    </Box>
  );
};

export default CardInfo;
