import { useContext } from 'react';
import { filterItems } from '../../../services/filter.service';
import { ItemsContext } from '../../app';
import styles from './clear-completed.module.scss'

export default ({ setItems, filter, setFilteredItems }): JSX.Element => {
  const items = useContext(ItemsContext);

  const handleClearCompletedClick = () => {
    setItems([...items.filter(item => !item.done)]);
    filterItems(filter, items, setFilteredItems);
  }

  return (
    <button type="button" className={styles.clear} onClick={handleClearCompletedClick}>Clear completed</button>
  )
}
