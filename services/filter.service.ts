import { Filter } from '../types/filter';
import { Item } from '../types/item';

export const filterItems = (
  filter: string,
  items: Item[],
  setFilteredItems: Function,
) => {
  switch (filter) {
    case 'Incomplete':
      setFilteredItems(items.filter((item: Item) => item.done === false));
      break;

    case 'Complete':
      setFilteredItems(items.filter((item: Item) => item.done === true));
      break;

    default:
      setFilteredItems(items);
      break;
  }
};

export const triggerFilter = (filter: string, setFilter: Function) => {
  switch (filter) {
    case 'Incomplete':
      setFilter('Incomplete');
      break;

    case 'Complete':
      setFilter('Complete');
      break;

    default:
      setFilter('All');
      break;
  }
};

export const updatedFilters = (i: number, filters: Filter[]): Filter[] => {
  filters.forEach((filter: Filter, index: number) => {
    filter.selected = index === i;
  });
  return filters;
};
