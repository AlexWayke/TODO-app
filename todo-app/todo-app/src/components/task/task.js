import './task.css';
import { formatDistanceToNowStrict } from 'date-fns';
import PropTypes from 'prop-types';

function Task({data, removeTask, changeTaskState}) {
  const {description, isDone, id, hide, date} = data;
  return (
    <li className={(isDone ? 'completed ' : '') + (hide ? 'hidden ' : '')}>
      <div className="view">
        <input className="toggle"
          type="checkbox"
          defaultChecked={isDone}
          onChange={() => changeTaskState(id)}
        />
        <label>
          <span className="description">{description}</span>
          <span className="created">created {formatDistanceToNowStrict(date)} ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={() => removeTask(id)}></button>
      </div>
    </li>
  )
}

Task.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    isDone: PropTypes.bool,
    id: PropTypes.number,
    hide: PropTypes.bool,
    date: PropTypes.instanceOf(Date),
  }),
  removeTask: PropTypes.func.isRequired,
  changeTaskState: PropTypes.func.isRequired,
}


export default Task;