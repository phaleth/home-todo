import styles from '../components/filter.module.scss';
import { useContext, useState } from 'react';
import { triggerFilter, filterItems } from '../services/filter.service';
import { ItemsContext } from '../components/app'

export default ({ setFilter, setFilteredItems }): JSX.Element => {
  const items = useContext(ItemsContext);

  const [filters, setFilters] = useState([
    {selected: true, label: 'All'},
    {selected: false, label: 'Incomplete'},
    {selected: false, label: 'Complete'},
  ]);

  const updatedFilters = i => {
    filters.forEach((filter, index) => {
       filter.selected = index === i;
    });
    return filters;
  }

  const handleFilterClick = (evt, i) => {
    setFilters(updatedFilters(i));
    triggerFilter(filters[i].label, setFilter);
    filterItems(filters[i].label, items, setFilteredItems);
  }

  return (
    <nav className={styles.filter}>
      {filters.map((filter, i) => (
        <span key={i} className={filter.selected ? styles.selectedFilter : ''}
          onClick={evt => handleFilterClick(evt, i)}
        >{filter.label}</span>
      ))}
    </nav>
  )
}
