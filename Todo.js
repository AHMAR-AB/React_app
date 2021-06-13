import React, { useState } from 'react'
import './Todo.css';
import { Button, List,ListItem,ListItemAvatar,ListItemText, Modal } from '@material-ui/core';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {makeStyles} from '@material-ui/core/styles';
import './color.css';
const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));



function Todo(props) {
    const classes = useStyles();
    const [open,setOpen]= useState(false);
    const [input,setInput]=useState();
    const handleOpen = () =>{
        setOpen(true);
    };
    
    const updateTodo=()=>{
        //update the todos with new input text.
        db.collection('todos').doc(props.todo.id).set({
         todo:input
        },{merge:true})
        setOpen(false);
    }
    
    
    return (
        <>
         <Modal
            open={open}
            onClose={e => setOpen(false)}
  
         >
           <div className={classes.paper} id="one">
               <h2>Are You Sure You Want To Edit👨‍🏫</h2>
               <form>
               <input id="input-edit"placeholder={props.todo.todo}value={input} onChange={event=>setInput(event.target.value)}></input>
               <Button variant="contained"id="button"color="primary" type="submit" onClick={updateTodo}>Save👈</Button>
               </form>
               
           </div>
         </Modal>

        <List >
       <ListItem id="item">
           <ListItemAvatar>

           </ListItemAvatar>
      <ListItemText primary={props.todo.todo} secondary="Hurry-up⌛ "/>
       </ListItem>
       <Button id="button"variant="contained" onClick={e =>setOpen(true)} color="primary">Edit ✏</Button>
       <Button id="button"variant="contained"color="secondary"onClick={event=>db.collection('todos').doc(props.todo.id).delete()}>Clear 😔</Button> 
       
        </List>
    </> 
        
    )
}

export default Todo
