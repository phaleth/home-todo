import styles from './filter-nav.module.scss';
import { useState } from 'react';
import Filter from './filter-nav/filter';
import { Filter as FilterType } from '../../../types/filter';

export default ({ setFilter, setFilteredItems }): JSX.Element => {
  const [filters, setFilters]: [FilterType[], Function] = useState([
    {selected: true, label: 'All'},
    {selected: false, label: 'Incomplete'},
    {selected: false, label: 'Complete'},
  ]);

  return (
    <nav className={styles.filterNav}>
      {filters.map((filter: FilterType, i: number): JSX.Element => (
        <Filter key={i} index={i} filter={filter} setFilter={setFilter}
          setFilteredItems={setFilteredItems} filters={filters} setFilters={setFilters}
        />
      ))}
    </nav>
  )
}
