import { useContext } from 'react';
import { filterItems } from '../../../services/filter.service';
import { Item } from '../../../types/item';
import { ItemsContext } from '../../app';
import styles from './complete-all.module.scss';

export default ({ setItems, filter, setFilteredItems }): JSX.Element => {
  const items: Item[] = useContext(ItemsContext);

  const handleCompleteAllClick = (): void => {
    items.map((item: Item) => item.done = true);
    setItems([...items]);
    filterItems(filter, items, setFilteredItems);
  }
  
  return (
    <section className={styles.dblCheckComplete}>
      <img className={styles.dblCheckMark} src='images/double-checkmark.png' />
      <button type="button" className={styles.complete} onClick={handleCompleteAllClick}>Complete all tasks</button>
    </section>
  )
}
