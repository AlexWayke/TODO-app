import './task-list.css'
import Task from '../task/'

function TaskList({ tasks }) {
  const listTasks = tasks.map(task => 
    <Task 
      condition={task.condition}
      description={task.description}
    />
  )
  
  return (
    <ul className="todo-list">
      {listTasks}
    </ul>
  )
}

export default TaskList;