import { formatDistanceToNowStrict, intervalToDuration } from 'date-fns';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Task({ data, removeTask, changeTaskState }) {
  const { description, isDone, id, hide, date } = data;
  const [timer, setTimer] = useState(0);
  const [play, setPlay] = useState(false);

  const minutes = intervalToDuration({ start: 0, end: timer * 1000 });
  const formatted = `${minutes.minutes || 0}:${minutes.seconds || '00'}`;

  useEffect(() => {
    const timerCheck = setInterval(() => {
      if (play && !isDone) {
        setTimer(timer + 1);
      }
    }, 1000);

    return () => clearInterval(timerCheck);
  }, [timer, play, isDone]);

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
        <label aria-label="input" htmlFor={id}>
          <span className="title">{description}</span>
          <span className="description">
            <button type="submit" aria-label="Play" className="icon icon-play" onClick={() => setPlay(true)} />
            <button type="submit" aria-label="Pause" className="icon icon-pause" onClick={() => setPlay(false)} />
            <p>{formatted}</p>
          </span>
          <span className="description">created {formatDistanceToNowStrict(date)} ago</span>
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
