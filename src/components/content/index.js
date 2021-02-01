import { Box, Image, Text, Tabs, TabList, Tab, TabPanel, TabPanels, Stack } from "@chakra-ui/react";

const Content = (props) => {
    return (
        <Box>
            <Box w="100%" bg="whatsapp.300" p='8px' borderRadius='8px' boxShadow='lg' position='relative' mt='30px'>
                <Text fontSize='32px' fontWeight='bold' mb='4px'>{props.name}</Text>
                <Stack direction="row">
                {
                    props.types.map((x, i) => (
                    <Box key={i}  bg='whiteAlpha.800' w='fit-content' p='4px 16px' borderRadius='8px' mb='4px'>{x.type.name}</Box>
                    ))
                }
                </Stack>
                <Image src={props.sprites.front_default} h='120px' w='auto' position='absolute' bottom='0' right='0'/>
            </Box>
            <Box bg='whiteAlpha.900'>
                <Tabs>
                    <TabList>
                        <Tab>Basic Attributes</Tab>
                        <Tab>Abilities</Tab>
                        <Tab>Stats</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Text fontSize='16px' mb='4px'>Weight : {props.weight}</Text>
                            <Text fontSize='16px' mb='4px'>Height : {props.height}</Text>
                        </TabPanel>
                        <TabPanel>
                            {
                                props.abilities.map((x, i) => (
                                    <Text key={i} fontSize='16px' mb='4px'>{x.ability.name}</Text>
                                ))
                            }
                        </TabPanel>
                        <TabPanel>
                            {
                                props.stats.map((x, i) => (
                                    <Text key={i} fontSize='16px' mb='4px'>{x.stat.name} : {x.base_stat}</Text>
                                ))
                            }
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>                    
        </Box>
    )
}

export default Content;