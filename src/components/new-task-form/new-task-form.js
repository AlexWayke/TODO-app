import { useState } from 'react';

function NewTaskForm({ addTask }) {
  const [data, setData] = useState({});
  const [title, setTitle] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');

  const addTaskForm = (event) => {
    event.preventDefault();
    if (data.title && event.key === 'Enter') {
      setTitle('');
      setMin('');
      setSec('');
      setData({});
      addTask(data);
    }
  };

  const handleInput = (inputName, inputValue) => {
    let input = inputValue;

    if (inputName === 'sec') {
      input = Number.isNaN(parseInt(input, 10)) ? sec : parseInt(input, 10);
      input = inputValue === '' ? '' : input;
      input = input > 60 ? 60 : input;
      setSec(input);
    } else if (inputName === 'min') {
      input = Number.isNaN(parseInt(input, 10)) ? min : parseInt(input, 10);
      input = inputValue === '' ? '' : input;
      setMin(input);
    } else {
      setTitle(input);
    }

    setData({
      ...data,
      [inputName]: input,
    });
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
          onChange={(e) => handleInput('title', e.target.value)}
          onKeyUp={addTaskForm}
        />
        <input
          value={min}
          className="new-todo-form__timer"
          placeholder="Min"
          onChange={(e) => handleInput('min', e.target.value)}
          onKeyUp={addTaskForm}
        />
        <input
          value={sec}
          className="new-todo-form__timer"
          placeholder="Sec"
          onChange={(e) => handleInput('sec', e.target.value)}
          onKeyUp={addTaskForm}
        />
      </form>
    </header>
  );
}

export default NewTaskForm;
