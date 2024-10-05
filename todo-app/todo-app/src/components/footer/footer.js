import './footer.css'
import TaskFilter from '../task-filter'

function Footer({filters}) {
  const listFilters = filters.map(filter =>
    <TaskFilter name={filter} />
  )
  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      <ul className="filters">
        {listFilters}
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}

export default Footer;