import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Textarea,
  Container,
  RadioGroup,
  Radio,
  
} from '@chakra-ui/react'
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import {useDispatch} from 'react-redux';
import {addNote} from '../../redux/notes/notesSlice';


function Form() {

  const dispatch = useDispatch();
  const [title,setTitle] =useState('');
  const [note,setNote] = useState('');
  const [color,setColor]= useState('red');

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(addNote({id:nanoid() ,title:title,note:note , color:color}))
    setTitle('');
    setNote('');

  }


  return(
    <Container maxW='container.lg'>
      <h1 style={{marginTop:'10rem'}}>Note App</h1>
      <form onSubmit={handleSubmit}>
      <FormControl >
        <FormLabel>Note Title</FormLabel>
        <Input id='title' backgroundColor='white' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title'/>
        <FormLabel>Note</FormLabel>
        <Textarea size='xl' backgroundColor='white' value={note} onChange={(e) => setNote(e.target.value)} placeholder='Your notes'/> 
        <RadioGroup name="form-name" value={color} onChange={setColor} >
         <Radio value={'red'}>Red</Radio>
         <Radio value={'purple'}>Purple</Radio>
         <Radio value={'yellow'}>Yellow</Radio>
         <Radio value={'cyan'}>Cyan</Radio>
        </RadioGroup>
        <Button mt={5} colorScheme='blue' variant='solid'type='submit'>Kaydet</Button>
      </FormControl>
      </form>
    </Container>
  ) ;
}

export default Form;
