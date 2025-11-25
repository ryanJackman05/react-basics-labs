import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';


function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id:1, title:"Dishes", description: "Empty dishwasher", deadline: "Today", priority:"Medium", done:false},
      { id:2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", priority:"High", done:false},
      { id:3, title: "Tidy up", deadline: "Today", priority:"Low", done:false}
    ]
  });
  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks]; // spread operator reads taskState.tasks as a whole array
    tasks[taskIndex].done = !tasks[taskIndex].done; // flip bool state of the one task
    setTaskState({tasks});
    console.log(`${taskIndex} ${tasks[taskIndex].done}`);
  }
  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks]; // spread operator reads taskState.tasks as a whole array
    tasks.splice(taskIndex, 1);
    setTaskState({tasks}); // assign new tasks object to taskState
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

    </div>
  );
}

export default App;
