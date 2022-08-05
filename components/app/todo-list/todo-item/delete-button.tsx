import { useContext } from 'react';
import styles from './delete-button.module.scss';
import { filterItems } from '../../../../services/filter.service';
import { ItemsContext } from '../../../app';

export default ({ item, index, setItems, filter, setFilteredItems }): JSX.Element => {
  const items = useContext(ItemsContext);

  const handleDelBtnClick = (_, i) => {
    items.splice(i, 1);
    setItems([...items]);
    filterItems(filter, items, setFilteredItems);
  }

  return (
    <img className={`${styles.delBtn} ${item.done ? '' : styles.hidden}`}
      src='images/circle-cancel.png'
      onClick={evt => handleDelBtnClick(evt, index)}
    />
  )
}
