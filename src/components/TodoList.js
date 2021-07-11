import React from 'react';
import Todo from './Todo'

const TodoList = ({setTodos, todos, filteredTodos}) => {
  return (

    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map(todo => (
        <Todo 
          key={todo.id} 
          todos={todos}
          todo={todo}
          text={todo.text} 
          setTodos={setTodos}
        />
        ))}
      </ul>

    </div>  

  );
};

export default TodoList; 