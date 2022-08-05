import { useContext } from 'react';
import { filterItems } from '../../../services/filter.service';
import { Item } from '../../../types/item';
import { ItemsContext } from '../../app';
import styles from './clear-completed.module.scss'

export default ({ setItems, filter, setFilteredItems }: {
  setItems: Function, filter: string, setFilteredItems: Function
}): JSX.Element => {
  const items: Item[] = useContext(ItemsContext);

  const handleClearCompletedClick = (): void => {
    setItems([...items.filter((item: Item) => !item.done)]);
    filterItems(filter, items, setFilteredItems);
  }

  return (
    <button type="button" className={styles.clear} onClick={handleClearCompletedClick}>Clear completed</button>
  )
}
