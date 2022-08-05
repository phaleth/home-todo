import styles from './filter.module.scss';
import { triggerFilter, filterItems, updatedFilters } from '../../../../services/filter.service';
import { ItemsContext } from '../../../app'
import { useContext } from 'react';
import { Item } from '../../../../types/item';

export default ({ index, filter, setFilter, setFilteredItems, filters, setFilters }): JSX.Element => {
  const items: Item[] = useContext(ItemsContext);

  const handleFilterClick = (_: any, i: number): void => {
    setFilters(updatedFilters(i, filters));
    triggerFilter(filters[i].label, setFilter);
    filterItems(filters[i].label, items, setFilteredItems);
  }

  return (
    <span className={filter.selected ? styles.selectedFilter : ''}
      onClick={(evt): void => handleFilterClick(evt, index)}
    >{filter.label}</span>
  )
}
