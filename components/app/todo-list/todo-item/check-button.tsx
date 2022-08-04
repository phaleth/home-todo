import { useContext } from 'react';
import { filterItems } from '../../../../services/filter.service';
import { ItemsContext } from '../../../app';
import styles from './check-button.module.scss';

export default ({ item, index, setItems, filter, setFilteredItems }): JSX.Element => {
  const items = useContext(ItemsContext);

  const handleCheckmarkClick = (_, i) => {
    items[i].done = !items[i].done;
    setItems([...items]);
    filterItems(filter, items, setFilteredItems);
  }

  return (
    <img className={item.done ? styles.radioBtnChecked : styles.radioBtnEmpty}
      src={item.done ? 'images/circle-checkmark.png' : 'images/circle-empty.png'}
      onClick={evt => handleCheckmarkClick(evt, index)}
    />
  )
}
