import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filteredHandler()
  }, [status, todos])
  
 const filteredHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  
  return (

    <div className="App">
      <header>
      <h1>Molly's todo list</h1>
      </header>
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText} 
        inputText={inputText}
        setStatus={setStatus}/>
      <TodoList 
        filteredTodos={filteredTodos} 
        setFilter
        todos={todos} 
        setTodos={setTodos}/>
    </div>
    
  );
}

export default App;
