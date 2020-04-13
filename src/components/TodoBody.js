import React from 'react';
import TodoListContainer from './TodoListContainer';

class TodoBody extends React.Component {
  render() {
    return (
      <div style={styles.TodoBody}>
        <TodoListContainer/>
      </div>
    );
  }
}

export default TodoBody;

 const styles = {
  TodoBody:{
    width:"400px",
    height:"600px",
    backgroundColor: "white",
    margin: "0 auto",
    lineHeight: '70px',
    textAlign: "center",
    color: "black",
    fontSize: '24px'
  }
 };
