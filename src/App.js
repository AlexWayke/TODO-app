import './App.css';
import { useState } from 'react';
import { uniqueId } from 'lodash';

import NewTaskForm from './components/new-task-form';
import Footer from './components/footer';
import TaskList from './components/task-list';

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentFilter, setFilter] = useState('All');

  const tasksToDo = tasks.filter((task) => !task.isDone);

  const addTask = (task) => {
    const createdDate = new Date();

    const newTask = {
      description: task.title,
      isDone: false,
      id: uniqueId('task_'),
      date: createdDate,
      timerValue: task.sec,
    };

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

  const editTask = (id, newDescription) => {
    const updatedTasks = tasks.map((task) => (task.id === id ? { ...task, description: newDescription } : task));
    setTasks(updatedTasks);
  };

  return (
    <section className="todoapp">
      <NewTaskForm addTask={addTask} />
      <section className="main">
        <TaskList
          tasks={tasks}
          removeTask={removeTask}
          changeTaskState={changeTaskState}
          filter={currentFilter}
          editTask={editTask}
        />
        <Footer
          currentFilter={currentFilter}
          setFilter={setFilter}
          removeCompleted={removeCompleted}
          tasksCount={tasksToDo.length}
        />
      </section>
    </section>
  );
}

export default App;
