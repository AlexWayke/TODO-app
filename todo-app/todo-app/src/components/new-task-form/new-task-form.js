import './new-task-form.css';

function NewTaskForm() {
  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo" placeholder="What needs to be done?" autofocus/>
    </header>
  )
}

export default NewTaskForm;