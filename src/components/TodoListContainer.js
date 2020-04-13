import React, { useState, useEffect } from 'react';
import TodoListItem from './TodoListItem'


const TodoListContainer =()=>{
  const [todoItems, setTodoItems] = useState([]);

    todoItems.push("Drink Coffee","Drink Milk","Drink Juice","Drink water,Drink Coffee","Drink Milk","Drink Juice","Drink water");

  const todoItemElement = todoItems.map((item)=>{
    return <TodoListItem title = {item}/>
  })

 

  return (
    <ul style={styles.ulStyles}>
    {todoItemElement}
    </ul>
  );
}

 

export default TodoListContainer;

const styles = {
  ulStyles:{
    padding: "0",
    listStyleType: "none"
  }
}
