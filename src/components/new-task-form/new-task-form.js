import { useState } from 'react';
import PropTypes from 'prop-types';

function NewTaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [sec, setSec] = useState('');
  const [min, setMin] = useState('');

  const addTaskForm = (event) => {
    event.preventDefault();

    if (title && event.key === 'Enter') {
      addTask({
        title,
        sec: min || sec ? min * 60 + sec : 0,
      });

      setTitle('');
      setMin('');
      setSec('');
    }
  };

  const handleInputTime = (flag, inputVal) => {
    let time = Number.isNaN(parseInt(inputVal, 10)) ? sec : parseInt(inputVal, 10);
    time = time > 60 ? 60 : time;
    time = inputVal === '' ? '' : time;
    if (flag === 'min') {
      setMin(time);
    } else {
      setSec(time);
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form className="new-todo-form">
        <input
          value={title}
          className="new-todo"
          placeholder="What needs to be done?"
          name="query"
          onChange={(e) => setTitle(e.target.value)}
          onKeyUp={addTaskForm}
        />
        <input
          value={min}
          className="new-todo-form__timer"
          placeholder="Min"
          onChange={(e) => handleInputTime('min', e.target.value)}
          onKeyUp={addTaskForm}
        />
        <input
          value={sec}
          className="new-todo-form__timer"
          placeholder="Sec"
          onChange={(e) => handleInputTime('sec', e.target.value)}
          onKeyUp={addTaskForm}
        />
      </form>
    </header>
  );
}

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};
export default NewTaskForm;
