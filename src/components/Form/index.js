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
  Radio
} from '@chakra-ui/react'

import {useDispatch} from 'react-redux';
import {addNote} from '../../redux/notes/notesSlice';

function Form() {

  const dispatch = useDispatch();

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("handle")

  }


  return(
    <Container maxW='container.lg'>
      <h1 style={{marginTop:'10rem'}}>Note App</h1>
      <FormControl>
        <FormLabel>Note Title</FormLabel>
        <Input id='title' backgroundColor='white' placeholder='Title'/>
        <FormLabel>Note</FormLabel>
        <Textarea size='xl' backgroundColor='white' placeholder='Your notes'/> 
        <RadioGroup name="form-name">
         <Radio>Red</Radio>
         <Radio>Purple</Radio>
        </RadioGroup>
        <Button mt={5} colorScheme='blue' variant='solid' onSubmit={handleSubmit}>Kaydet</Button>
      </FormControl>
      
    </Container>
  ) ;
}

export default Form;
