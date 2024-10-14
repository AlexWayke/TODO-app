import './task-list.css';
import PropTypes from 'prop-types';

import Task from '../task';

function TaskList({ tasks = [], removeTask, changeTaskState }) {
  const listTasks = tasks.map((task) => (
    <Task data={task} key={task.id} removeTask={removeTask} changeTaskState={changeTaskState} />
  ));

  return <ul className="todo-list">{listTasks}</ul>;
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape).isRequired,
  removeTask: PropTypes.func.isRequired,
  changeTaskState: PropTypes.func.isRequired,
};

export default TaskList;
