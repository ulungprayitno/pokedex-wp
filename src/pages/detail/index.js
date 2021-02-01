import { Box, Image, Text, Grid, Tabs, TabList, Tab, TabPanel, TabPanels, Stack, Skeleton, Select } from "@chakra-ui/react";
import { useLazyFetch } from '../../hooks/use-lazy-fetch';
import { useEffect, useState } from "react";
import Content from "../../components/content";

const Detail = (props) => {
    const [{ data, details, compare, loading, error }, {getDetailByName, fetchData}] = useLazyFetch();
    
    useEffect(() => {
        getDetailByName(props.match.params.name)
        fetchData({compare : true});
    },[]);

    if(loading || !details || !data){
        return (
            <Box mt='76px' p='24px'>
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    <Skeleton h='200px' borderRadius='8px'/>
                </Grid>
            </Box>
        )
    }
  
    if(error){
        return <Text> Something went wrong! </Text>
    }

    const onCompare = (e) => {
        getDetailByName(e.target.value, true);
    }
    return (
        <Box mt='76px' p='24px'>
            <Box position='relative' mb='16px' w='auto'>
                <Select placeholder="Compare With" onChange={onCompare}>
                    { data.map((item, index) => (
                        <option key={index} value={item.name}>{item.name}</option>
                    )) }
                </Select>
            </Box>

            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <Content {...details} />
                
                { compare && (
                    <Content {...compare} />
                )}
            </Grid>
        </Box>
    )
}

export default Detail;