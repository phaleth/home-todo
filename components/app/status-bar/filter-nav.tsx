import styles from './filter-nav.module.scss';
import { useState } from 'react';
import Filter from './filter-nav/filter';

export default ({ setFilter, setFilteredItems }): JSX.Element => {
  const [filters, setFilters] = useState([
    {selected: true, label: 'All'},
    {selected: false, label: 'Incomplete'},
    {selected: false, label: 'Complete'},
  ]);

  return (
    <nav className={styles.filterNav}>
      {filters.map((filter, i) => (
        <Filter key={i} index={i} filter={filter} setFilter={setFilter}
          setFilteredItems={setFilteredItems} filters={filters} setFilters={setFilters}
        />
      ))}
    </nav>
  )
}
