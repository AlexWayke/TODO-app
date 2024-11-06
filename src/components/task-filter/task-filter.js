import PropTypes from 'prop-types';

function TaskFilter({ filters, filterTasks }) {
  const listFilters = filters.map((filter) => (
    <li key={filter.name}>
      <button className={filter.isActive ? 'selected' : ''} type="submit" onClick={() => filterTasks(filter.name)}>
        {filter.name}
      </button>
    </li>
  ));

  return <ul className="filters">{listFilters}</ul>;
}

TaskFilter.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      isActive: PropTypes.bool,
    })
  ).isRequired,
  filterTasks: PropTypes.func.isRequired,
};

export default TaskFilter;
