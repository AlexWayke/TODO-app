import './new-task-form.css';

function NewTaskForm({addTask, setinputVal}) {
  return (
    <header className="header">
      <h1>todos</h1>
      <input 
        className="new-todo"
        placeholder="What needs to be done?" 
        onKeyDown={(e) => {
          if(e.key === 'Enter'){
            addTask(e.target.value)
            e.target.value = ''
          }
        }} 
        autoFocus
      />
    </header>
  )
}

export default NewTaskForm;