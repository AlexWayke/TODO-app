import './App.css';
import { useState } from 'react';
import NewTaskForm from './components/new-task-form'
import Footer from './components/footer'
import TaskList from './components/task-list'

function App() {
  let [maxId, setMaxId] = useState(1);
  
  const [tasks, setTasks] = useState([]);

  const [filters, setFilters] = useState([
    {'isActive': true,'name':'All'},
    {'isActive': false,'name':'Active'},
    {'isActive': false,'name':'Completed'}
  ])

  const tasksToDo = tasks.filter(task => !task.isDone)

  function addTask(title){
    const currentFilter = filters[filters.findIndex(filter => filter.isActive)]
    const createdDate = new Date();
    const newTask = {
      'description': title,
      'isDone': false,
      'id': maxId,
      'hide': currentFilter.name === 'Completed' ? true : false,
      'date': createdDate,
    }
    
    setMaxId(++maxId)
    setTasks([...tasks,newTask])
  }

  function removeTask(id){
    const filteredTasks = tasks.filter(task => task.id !== id)
    setTasks(filteredTasks)
  }

  function removeCompleted(){
    const uncomplitedTasks = tasks.filter(task => !task.isDone)
    setTasks(uncomplitedTasks)
  }

  function changeTaskState(id){
    const updatedTasks = tasks.map(task => {
      return task.id === id ? {...task, isDone: !task.isDone} : task
    })
    setTasks(updatedTasks)
  }

  function filterTasks(cond){
    const filteredTasks = tasks.map(task => {
      let toHide = cond === 'Active' ? task.isDone : cond === 'Completed' ? !task.isDone : false;
      const updTask = {...task, hide: toHide}
      
      return updTask
    });

    const updFilters = filters.map(filter => {
      return {...filter, isActive: filter.name === cond}
    })
    
    setFilters(updFilters)
    setTasks(filteredTasks)
  }
  
  return (
    <section className="todoapp">
      <NewTaskForm addTask={addTask} />
      <section className="main">
        <TaskList 
          tasks={tasks}
          removeTask={removeTask}
          changeTaskState={changeTaskState}
        />
        <Footer 
          filters={filters}
          filterTasks={filterTasks}
          removeCompleted={removeCompleted}
          tasksCount={tasksToDo.length}
        />
      </section>
    </section>
  );
}

export default App;
