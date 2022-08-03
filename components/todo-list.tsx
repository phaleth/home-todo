import { useContext } from 'react';
import styles from '../components/todo-list.module.scss';
import { filterItems } from '../services/filter.service';
import { ItemsContext } from './app';

export default ({ setItems, filter, filteredItems, setFilteredItems }) => {
  const items = useContext(ItemsContext);

  const handleCheckmarkClick = (evt, i) => {
    items[i].done = !items[i].done;
    setItems([...items]);
    filterItems(filter, items, setFilteredItems);
  }

  const handleDelBtnClick = (evt, i) => {
    items.splice(i, 1);
    setItems([...items]);
    filterItems(filter, items, setFilteredItems);
  }

  return (
    <ul className={styles.list}>
      {filteredItems.map((item, i) => (
        <li key={i} className={styles.item}>
          <img className={item.done ? styles.radioBtnChecked : styles.radioBtnEmpty}
            src={item.done ? 'images/circle-checkmark.png' : 'images/circle-empty.png'}
            onClick={evt => handleCheckmarkClick(evt, i)}
          />
          <span className={styles.text}>{item.text}</span>
          <img className={`${styles.delBtn} ${item.done ? '' : styles.hidden}`}
            src='images/circle-cancel.png'
            onClick={evt => handleDelBtnClick(evt, i)}
          />
        </li>
      ))}
    </ul>
  )
}
