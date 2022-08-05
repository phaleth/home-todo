import { useContext } from 'react';
import { addTodo } from '../../../services/todo.service';
import { Item } from '../../../types/item';
import { ItemsContext } from '../../app';
import styles from './add-button.module.scss';

export default ({ setItems, filter, setFilteredItems }): JSX.Element => {
  const items: Item[] = useContext(ItemsContext);

  const handleAddClick = (evt): void => addTodo(evt, items, setItems, filter, setFilteredItems);

  return (
    <button type="button" className={styles.add} onClick={handleAddClick}>Add</button>
  )
}
