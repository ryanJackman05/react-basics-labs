import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';
import AddTaskForm from './components/Form';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id:1, title:"Dishes", description: "Empty dishwasher", deadline: "Today", priority:"Medium", done:false},
      { id:2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", priority:"High", done:false},
      { id:3, title: "Tidy up", deadline: "Today", priority:"Low", done:false}
    ]
  });
  const [ formState, setFormState ] = useState({
    title: "",
    description: "",
    deadline: ""
  });

  const formChangeHandler = (event) => {
    let form = {...formState}; // spread operator makes a copy

    switch(event.target.name) { // change field depending on target component from event
      case "title":
          form.title = event.target.value;
          break;
      case "description":
          form.description = event.target.value;
          break;
      case "deadline":
          form.deadline = event.target.value;
          break;
      case "priority":
          form.priority = event.target.value;
          break;
      default:
          form = formState;
    }
    setFormState(form);
    console.log(formState);
  }
  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks]; // spread operator reads and copies the array object, rather than a reference.
    tasks[taskIndex].done = !tasks[taskIndex].done; // flip bool state of the one task
    setTaskState({tasks});
    console.log(`${taskIndex} ${tasks[taskIndex].done}`);
  }
  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks]; // spread operator reads taskState.tasks as a whole array
    tasks.splice(taskIndex, 1);
    setTaskState({tasks}); // assign new tasks object to taskState
  }
  const formSubmitHandler = (event) => { // event parameter -> refer to Form.jsx form
    event.preventDefault();

    const tasks = [...taskState.tasks]; // new tasks duplicate
    const form = {...formState}; // new form duplicate

    form.id = uuidv4();
    
    tasks.push(form); // add contents of current form to the front of tasks array.
    setTaskState({tasks}); // set new tasks
  }

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task, index) => (              
        <Task 
        title={task.title}
        description={task.description}
        deadline={task.deadline}
        priority={task.priority}
        key={task.id}
        done={task.done}
        markDone={() => doneHandler(index)} // pass in methods as parameters. It just works.
        deleteTask = {() => deleteHandler(index)}
        />
      ))}
      <AddTaskForm submit={formSubmitHandler} change={formChangeHandler} />/*pass the handler in*/

    </div>
  );
}

export default App;
