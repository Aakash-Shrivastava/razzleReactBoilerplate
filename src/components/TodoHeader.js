import React from 'react';

class TodoHeader extends React.Component {
  render() {
    return (
      <div style={styles.todoHeader}>
        To-Do List
      </div>
    );
  }
}

export default TodoHeader;

 const styles = {
  todoHeader:{
    width:"400px",
    height:"70px",
    backgroundColor: "green",
    margin: "0 auto",
    lineHeight: '70px',
    textAlign: "center",
    color: "white",
    fontSize: '24px'
  }
 };
