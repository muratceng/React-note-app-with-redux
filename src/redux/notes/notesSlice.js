import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [
            {
                id: '1',
                title: 'note 1',
                note: 'this is a note',
                color:'red'
            },
            {
                id:'2',
                title:'note 2',
                note:'this is also note',
                color:'purple'
            }],
    },
    reducers: {
        addNote:(state,action)=>{
            state.items.push(action.payload);
        }
     },
})

export const {addNote} = notesSlice.actions;
export default notesSlice.reducer;