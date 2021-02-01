import { useLazyFetch } from '../../hooks/use-lazy-fetch';
import { Box, Grid, Image, Skeleton, Text, Select, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom';

function App() {
  const history = useHistory();
  const [{ data, types, loading, error }, {fetchData, fetchDataFilter, getTypes}] = useLazyFetch();

  useEffect(() => {
    fetchData({compare : false});
    getTypes()
  },[]);
  
  if(loading && !data){
      return (
          <Box mt='76px' p='24px'>
              <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                  {[...new Array(20)].map((_, index) => (
                          <Skeleton h='200px' key={index} borderRadius='8px'/>
                  ))}
              </Grid>
          </Box>
      )
  }

  if(error){
      return <Text> Something went wrong! </Text>
  }

  const getDetail = (name) => () => {
      history.push(`/detail/${name}`)
  }

  const onFilter = (e) => {
    let param = e.target.value.split('/type/')[1];
    let url = `/type/${param}`
    fetchDataFilter(url)
  }

  const loadMore = () => {
    fetchData({compare: false})
  }

  return (
    <Box mt='76px' p='24px'>
        <Box position='relative' mb='16px' w='auto'>
          <Select placeholder="Filter Type" onChange={onFilter}>
            { types && types.map((item, index) => (
              <option key={index} value={item.url}>{item.name}</option>
            ))}
          </Select>
        </Box>

        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {
            data && data.map((item) => (
            <Box key={item.id} w="100%" bg="whatsapp.300" p='16px' borderRadius='8px' boxShadow='lg' position='relative' cursor='pointer' onClick={getDetail(item.name)}>
                <Text fontSize='32px' fontWeight='bold' mb='4px'>{item.name}</Text>
                {
                    item.types.map((x, i) => (

                    <Box key={i}  bg='whiteAlpha.800' w='fit-content' p='4px 16px' borderRadius='8px' mb='4px'>{x.type.name}</Box>
                    ))
                }
                <Image src={item.sprites.front_default} h='120px' w='auto' right='0' bottom='0' position='absolute' />
                </Box>
            ))
            }
        </Grid>

        <Box d='flex' mb='16px' mt='16px' w='auto' justifyContent='center' alignItems='center'>
          <Button colorScheme="teal" size="md" onClick={loadMore}>
              Load More
          </Button>
        </Box>
    </Box>
  )
}

export default App;
