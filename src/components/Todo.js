import React from 'react';
import TodoHeader from './TodoHeader';
import TodoBody from './TodoBody';

class Todo extends React.Component {
  render() {
    return (
      <>
        <TodoHeader/>
        <TodoBody/>
      </>
    );
  }
}

export default Todo;
