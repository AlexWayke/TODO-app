import './footer.css'
import TaskFilter from '../task-filter';
import PropTypes from 'prop-types';

function Footer({filters, filterTasks, removeCompleted, tasksCount = '0'}) {
  return (
    <footer className="footer">
      <span className="todo-count">
        {tasksCount > 0 ? tasksCount + ' items left' : 'No tasks to do'}
      </span>
      <TaskFilter 
        filters={filters}
        filterTasks={filterTasks}
      />
      <button className="clear-completed" onClick={() => removeCompleted()}>Clear completed</button>
    </footer>
  )
}

Footer.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.object),
  filterTasks: PropTypes.func.isRequired,
  removeCompleted: PropTypes.func.isRequired,
  tasksCount: PropTypes.number,
}


export default Footer;