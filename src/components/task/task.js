import { formatDistanceToNowStrict, intervalToDuration } from 'date-fns';
import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

function Task({ data, removeTask, changeTaskState, filter, editTask }) {
  const { description, isDone, id, date, timerValue = 0 } = data;
  const [timer, setTimer] = useState(timerValue);
  const [play, setPlay] = useState(false);
  const [isEditing, setEditing] = useState(false);

  const formatTime = (num) => (num > 9 ? num : `0${num}`);
  const minutes = intervalToDuration({ start: 0, end: timer * 1000 });
  const formattedTime = `${minutes.minutes || 0}:${minutes.seconds ? formatTime(minutes.seconds) : '00'}`;

  const toHide = (filter === 'Active' && isDone) || (filter === 'Completed' && !isDone);

  const inputEl = useRef(null);

  const handleEditInput = (event) => {
    if (inputEl.current.value && event.key === 'Enter') {
      editTask(id, inputEl.current.value);
      setEditing(false);
    } else if (event.key === 'Escape') {
      inputEl.current.value = description;
      setEditing(false);
    }
  };

  useEffect(() => {
    const timerCheck = setInterval(() => {
      if (play && !isDone && timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => clearInterval(timerCheck);
  }, [timer, play, isDone]);

  useEffect(() => {
    const clickOutOfInput = (event) => {
      if (inputEl.current && !inputEl.current.contains(event.target)) {
        setEditing(false);
        inputEl.current.value = description;
      }
    };
    document.addEventListener('mousedown', clickOutOfInput);
    return () => {
      document.removeEventListener('mousedown', clickOutOfInput);
    };
  }, [description, isEditing]);

  return (
    <li className={(isDone ? 'completed ' : '') + (toHide ? 'hidden ' : '') + (isEditing ? 'editing' : '')}>
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
            <p>{formattedTime}</p>
          </span>
          <span className="description">created {formatDistanceToNowStrict(date)} ago</span>
        </label>
        <button type="submit" aria-label="Edit" className="icon icon-edit" onClick={() => setEditing(true)} />
        <button type="submit" aria-label="Delete" className="icon icon-destroy" onClick={() => removeTask(id)} />
      </div>
      <input
        type="text"
        className="edit"
        ref={inputEl}
        defaultValue={description}
        onChange={(e) => {
          inputEl.current.value = e.target.value;
        }}
        onKeyUp={handleEditInput}
      />
    </li>
  );
}

Task.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    isDone: PropTypes.bool,
    id: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    timerValue: PropTypes.number,
  }).isRequired,
  removeTask: PropTypes.func.isRequired,
  changeTaskState: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  editTask: PropTypes.func.isRequired,
};

export default Task;
