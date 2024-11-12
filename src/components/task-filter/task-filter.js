import PropTypes from 'prop-types';

function TaskFilter({ currentFilter, setFilter }) {
  const filters = ['All', 'Active', 'Completed'];

  const listFilters = filters.map((filter) => (
    <li key={filter}>
      <button className={currentFilter === filter ? 'selected' : ''} type="submit" onClick={() => setFilter(filter)}>
        {filter}
      </button>
    </li>
  ));

  return <ul className="filters">{listFilters}</ul>;
}

TaskFilter.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default TaskFilter;
