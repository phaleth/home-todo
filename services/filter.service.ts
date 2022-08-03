export const filterItems = (filter, items, setFilteredItems) => {
  switch (filter) {
    case 'Incomplete':
      setFilteredItems(items.filter((item) => item.done === false));
      break;

    case 'Complete':
      setFilteredItems(items.filter((item) => item.done === true));
      break;

    default:
      setFilteredItems(items);
      break;
  }
};

export const triggerFilter = (filter, setFilter) => {
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
