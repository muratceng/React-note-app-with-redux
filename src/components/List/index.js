import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux'
import { Box, Grid, GridItem, Input, useDisclosure } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import OpenModal from '../OpenModal';

function List() {
  const [filter,setFilter] = useState('');
  const [modal,setModal]  = useState(false);
  const [currentId,setCurrentId]=useState('');
  const items =useSelector(state => state.notes.items);
  console.log(items);

  
    const filtered = items.filter((item)=> {
      return Object.keys(item).some((key)=>
        item[key].toString().includes(filter)
      )
    });

    const { isOpen, onOpen, onClose } = useDisclosure();


  return (
  <Container maxW='container.lg' centerContent mt={5} >
    <Input width={300} placeholder='search' value={filter} onChange={(e)=>setFilter(e.target.value)}></Input>
    <Grid templateColumns='repeat(3, 1fr)' gap={10} mt={10}>
    {filtered.map((item)=>(
      <Box p={4} width={300} key={item.id} className={item.color}onClick={()=>{setCurrentId(item.id);setModal(true)}} >{item.title}</Box>
    ))}
    </Grid>
    {modal  && <OpenModal id={currentId} setModal={setModal} Modal={modal} isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>}
  </Container>);
}

export default List;
