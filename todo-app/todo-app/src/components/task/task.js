import './task.css'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

function Task({condition , description}) {
  const createDate = formatDistanceToNow(new Date());

  return (
    <li className={condition === 'completed' && 'completed'}>
      <div className="view">
        <input className="toggle" type="checkbox"/>
        <label>
          <span className="description">{description}</span>
          <span className="created">created {createDate}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    </li>
  )
}

export default Task;