import { useState } from "react";

export default function Class5() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    
    const nTask = {
      id : todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1 ,
      taskName : newTask,
      completed : false
    };
    setTodoList([...todoList, nTask]);
    // console.log(todoList);
  };
  const getTask = (e) => {
    setNewTask(e.target.value);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task)=>{return !(task.id === id)}))
    
  };

  const check = (id) => {
    
    setTodoList(
      todoList.map((task) => {
        // return task.id === id ? {...task,completed : true}: task
        return task.id === id ? {...task,completed : !(task.completed)}: task
      })
    );

  }
  
  return (
    <div>
      <input type="text" onChange={getTask} />
      <button onClick={addTask}>Add task</button>

      {todoList.map((task) => {
        
        return <Task taskName = {task.taskName} deleteTask={deleteTask} id = {task.id}
          completed = {task.completed} check = {check}
        />;
        {
          /* return (
          <div>
            <p>{task.taskName}</p>
            <button onClick = {() => check(task.id)}>completed</button>
            <button onClick={() => deleteTask(task.id)}>X</button>
          </div>
        ); */
        }
        
      })}
    </div>
  );
}

const Task = (props) => {
    return(
        <div style={{backgroundColor : props.completed ? "green" : "white"}}>
            <p>{props.taskName}</p>
            <button onClick = {() => props.check(props.id)}>completed</button>
            <button onClick={() => props.deleteTask(props.id)}>X</button>
        </div>
    );
}
