import styles from './filter.module.scss';
import { triggerFilter, filterItems, updatedFilters } from '../../../../services/filter.service';
import { ItemsContext } from '../../../app'
import { useContext } from 'react';

export default ({ index, filter, setFilter, setFilteredItems, filters, setFilters }): JSX.Element => {
  const items = useContext(ItemsContext);

  const handleFilterClick = (_, i) => {
    setFilters(updatedFilters(i, filters));
    triggerFilter(filters[i].label, setFilter);
    filterItems(filters[i].label, items, setFilteredItems);
  }

  return (
    <span className={filter.selected ? styles.selectedFilter : ''}
      onClick={evt => handleFilterClick(evt, index)}
    >{filter.label}</span>
  )
}