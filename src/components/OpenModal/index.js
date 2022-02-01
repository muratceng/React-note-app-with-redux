import React from 'react';
import {
    Box,
    Grid,
    GridItem,
    Input,
    Modal,
    Button,
    useDisclosure,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { destroy } from '../../redux/notes/notesSlice';

function OpenModal({ id,setModal,Modals, onOpen,isOpen,onClose}) {
    const items = useSelector(state => state.notes.items);
    const dispatch = useDispatch();

    const item = items.find((item) => item.id === id)
    console.log(item);

    

    const handleDelete = (id) => {
        dispatch(destroy(id));
    }
    return (
        <>
           



            <Modal isOpen={onOpen} onClose={()=>setModal(false)} >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{item.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {item.note}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={()=>{setModal(false)}}>
                            Close
                        </Button>
                        <Button colorScheme='red' onClick={()=>{handleDelete(item.id);setModal(false)}}>Delete</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default OpenModal;
