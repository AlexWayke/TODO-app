import './task-filter.css'

function TaskFilter({name}) {
  return (
    <li>
      <button>{name}</button>
    </li>
  )
}

export default TaskFilter;