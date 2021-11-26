import React from 'react';

const Todos = ({ deleteTodo, todos }) => {
  const todoList = todos.length
    ? (
      todos.map((todo, idx) => {
        return (
          <div className="collection-item" key={idx}>
            <span onClick={() => deleteTodo(todo.id)}>
              {todo.content}
            </span>
          </div>
        )
      })
    )
    : <p className="center">You have no todo's left, yay!</p>;

  return (
    <div className="todos collection">
      {todoList}
    </div>
  );
};

export default Todos;