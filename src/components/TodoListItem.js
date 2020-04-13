import React from 'react';

const TodoListItem = (props)=>{
    return (
    <li style={styles.listStyle}>{props.title}
    <span>x</span></li>
    );
}

export default TodoListItem;

const styles = {
  listStyle:{
    listStyle:"none"
  }
 };