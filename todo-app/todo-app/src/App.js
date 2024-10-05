import './App.css';
import NewTaskForm from './components/new-task-form'
import Footer from './components/footer'
import TaskList from './components/task-list'

function App() {
  return (
    <section className="todoapp">
      <NewTaskForm />
      <section className="main">
        <TaskList 
          tasks={[
            {
              'description':'Completed task',
              'condition': 'completed'
            },
            {
              'description':'Editing task',
              'condition': 'editing'
            },
            {
              'description':'Active task',
              'condition': 'active'
            },
            ]} 
          />
        <Footer filters={['All','Active','Completed']} />
      </section>
    </section>
  );
}

export default App;
