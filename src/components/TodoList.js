import React from 'react';
//import components
import Todo from './Todo';
function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <Todo
              key={todo.id}
              text={todo.text}
              id={todo.id}
              todos={todos}
              todo={todo}
              setTodos={setTodos}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
