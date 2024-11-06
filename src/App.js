import './App.css';
import { useState } from 'react';

import NewTaskForm from './components/new-task-form';
import Footer from './components/footer';
import TaskList from './components/task-list';

function App() {
  const [maxId, setMaxId] = useState(1);
  const [tasks, setTasks] = useState([]);

  const [filters, setFilters] = useState([
    { isActive: true, name: 'All' },
    { isActive: false, name: 'Active' },
    { isActive: false, name: 'Completed' },
  ]);

  const tasksToDo = tasks.filter((task) => !task.isDone);

  const addTask = (title) => {
    const currentFilter = filters[filters.findIndex((filter) => filter.isActive)];
    const createdDate = new Date();
    const newTask = {
      description: title,
      isDone: false,
      id: maxId,
      hide: currentFilter.name === 'Completed',
      date: createdDate,
      play: false,
    };

    setMaxId(maxId + 1);
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const removeCompleted = () => {
    const uncomplitedTasks = tasks.filter((task) => !task.isDone);
    setTasks(uncomplitedTasks);
  };

  const changeTaskState = (id) => {
    const updatedTasks = tasks.map((task) => (task.id === id ? { ...task, isDone: !task.isDone } : task));
    setTasks(updatedTasks);
  };

  const togglePlayState = (id) => {
    const updatedTasks = tasks.map((task) => (task.id === id ? { ...task, play: !task.play } : task));
    setTasks(updatedTasks);
  };

  const filterTasks = (cond) => {
    const filteredTasks = tasks.map((task) => {
      let toHide = false;
      if (cond !== 'All') {
        toHide = cond === 'Active' ? task.isDone : !task.isDone;
      }
      const updTask = { ...task, hide: toHide };

      return updTask;
    });

    const updFilters = filters.map((filter) => ({ ...filter, isActive: filter.name === cond }));

    setFilters(updFilters);
    setTasks(filteredTasks);
  };

  return (
    <section className="todoapp">
      <NewTaskForm addTask={addTask} />
      <section className="main">
        <TaskList tasks={tasks} removeTask={removeTask} changeTaskState={changeTaskState} play={togglePlayState} />
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
