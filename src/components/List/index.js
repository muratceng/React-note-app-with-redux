import React from 'react';
import {useSelector} from 'react-redux'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'

function List() {
  const items =useSelector(state => state.notes.items);
  console.log(items);

  const handleClick=(id)=>{
    const item = items.find((item)=>item.id===id )
    console.log(item);
  }

  return (
  <Container maxW='container.xl' centerContent >
    <Grid templateColumns='repeat(3, 1fr)' gap={10} mt={10}>
    {items.map((item)=>(
      <Box p={4} width={300} key={item.id} className={item.color}onClick={()=>handleClick(item.id)} >{item.title}</Box>
    ))}
    </Grid>
  </Container>);
}

export default List;
