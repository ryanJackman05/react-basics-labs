import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Lab 1</h1>
          <Task title = "Gaming" deadline = "ASAP" desc = "Do some gaming"></Task>
          <Task title = "Tidy" deadline = "Tomorrow or the day after idk" desc = "Clean up the house"></Task>
          <Task title = "Dishes" deadline = "When I feel like it" desc = "Do the dishes"></Task>
    </div>
  );
}

export default App;
