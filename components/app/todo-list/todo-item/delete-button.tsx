import { useContext } from 'react';
import styles from './delete-button.module.scss';
import { filterItems } from '../../../../services/filter.service';
import { ItemsContext } from '../../../app';
import { Item } from '../../../../types/item';

export default ({ item, index, setItems, filter, setFilteredItems }): JSX.Element => {
  const items: Item[] = useContext(ItemsContext);

  const handleDelBtnClick = (_: any, i: number): void => {
    items.splice(i, 1);
    setItems([...items]);
    filterItems(filter, items, setFilteredItems);
  }

  return (
    <img className={`${styles.delBtn} ${item.done ? '' : styles.hidden}`}
      src='images/circle-cancel.png'
      onClick={(evt): void => handleDelBtnClick(evt, index)}
    />
  )
}
