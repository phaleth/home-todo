import { useContext } from 'react';
import { filterItems } from '../../../../services/filter.service';
import { Item } from '../../../../types/item';
import { ItemsContext } from '../../../app';
import styles from './check-button.module.scss';

export default ({ item, index, setItems, filter, setFilteredItems }): JSX.Element => {
  const items: Item[] = useContext(ItemsContext);

  const handleCheckmarkClick = (_: any, i: number): void => {
    items[i].done = !items[i].done;
    setItems([...items]);
    filterItems(filter, items, setFilteredItems);
  }

  return (
    <img className={item.done ? styles.radioBtnChecked : styles.radioBtnEmpty}
      src={item.done ? 'images/circle-checkmark.png' : 'images/circle-empty.png'}
      onClick={(evt): void => handleCheckmarkClick(evt, index)}
    />
  )
}
