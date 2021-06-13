import React, { useState,useEffect } from 'react';
import Todo from './Todo';
import logo from './logo.svg';
import { Button,FormControl,Input,InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from 'firebase';
import './color.css';

function App() {
  const [todos,setTodos] = useState([]);
  const [input,setInput] = useState('');
  
  // Now when the app loads,we need to listen to the database and fetch new todos as they get added
  useEffect(() =>{
//this codes fires when the app.js loaded.
   db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
     setTodos(snapshot.docs.map(doc=>({id:doc.id, todo:doc.data().todo})))
   })
  },[]);
  //console.log(' '+input);
  
  const addTodo = (event)=>{
    
  event.preventDefault();//now the wo'nt refresh while submitting.
    // this will fire off when we click the button.
    //console.log(' '+"ya iam working properly");
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos,input]);// here we are basically pushing
    //whatever we had in the input feild to array of todos.
    setInput('');//after you hit enter the i/p feild becomes blank again for next i/p.
  }
  
  
  return (
    <div className="App"> 
      <h1>Write Your TODO'S {2021}⏰ </h1> 
      <form className='todo-form'>
      
      <FormControl>
  <InputLabel>🖐Type Something...</InputLabel>
  <Input className='todo-input' value={input} onChange={event => setInput(event.target.value)}/>
  
</FormControl>


      <Button disabled={!input}type="submit" onClick={addTodo} variant="contained" color="primary">
     Add to do
      </Button>
     
      </form>
      
      <ul>
        {todos.map(todo=>(
          <Todo todo={todo}></Todo>
          //<li>{todo}</li>
        ))}
         
      </ul>
    </div>
  );
}

export default App;
