import { Box, Image } from "@chakra-ui/react";

const Navbar = () => {
    return (
        <Box d='flex' height='76px' w='100%' bg='#2f2f2f' alignItems='center' justifyContent='center' position="fixed" top='0' zIndex='1'> 
            <Image src='logo-pokemon.png'  h='65px' w='auto'/>
        </Box>
    )
}

export default Navbar;