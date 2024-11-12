import PropTypes from 'prop-types';

import TaskFilter from '../task-filter';

function Footer({ currentFilter, setFilter, removeCompleted, tasksCount = 0 }) {
  return (
    <footer className="footer">
      <span className="todo-count">{tasksCount > 0 ? `${tasksCount} items left` : 'No tasks to do'}</span>
      <TaskFilter currentFilter={currentFilter} setFilter={setFilter} />
      <button className="clear-completed" type="submit" onClick={() => removeCompleted()}>
        Clear completed
      </button>
    </footer>
  );
}

Footer.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  removeCompleted: PropTypes.func.isRequired,
  tasksCount: PropTypes.number.isRequired,
};

export default Footer;
