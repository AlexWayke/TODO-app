import './task.css';
import { formatDistanceToNowStrict } from 'date-fns';
import PropTypes from 'prop-types';

function Task({ data, removeTask, changeTaskState }) {
  const { description, isDone, id, hide, date } = data;
  return (
    <li className={(isDone ? 'completed ' : '') + (hide ? 'hidden ' : '')}>
      <div className="view">
        <input
          className="toggle"
          name="doneCheckbox"
          id={id}
          type="checkbox"
          defaultChecked={isDone}
          onChange={() => changeTaskState(id)}
        />
        <label htmlFor={id}>
          <span className="description">{description}</span>
          <span className="created">created {formatDistanceToNowStrict(date)} ago</span>
        </label>
        <button type="submit" aria-label="Edit" className="icon icon-edit" />
        <button type="submit" aria-label="Delete" className="icon icon-destroy" onClick={() => removeTask(id)} />
      </div>
    </li>
  );
}

Task.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    isDone: PropTypes.bool,
    id: PropTypes.number,
    hide: PropTypes.bool,
    date: PropTypes.instanceOf(Date),
  }).isRequired,
  removeTask: PropTypes.func.isRequired,
  changeTaskState: PropTypes.func.isRequired,
};

export default Task;
