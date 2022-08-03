import { useContext } from 'react';
import { addTodo } from '../../../services/todo.service';
import { ItemsContext } from '../../app';
import styles from './todo-input.module.scss'

export default ({ setItems, filter, setFilteredItems }):JSX.Element => {
  const items = useContext(ItemsContext);

  const handleKeyPress = evt => {
    if (evt.key === 'Enter') {
      addTodo(evt, items, setItems, filter, setFilteredItems);
    }
  }

  return (
    <>
      <img className={styles.checklist} src='images/checklist.png' />
      <input className={styles.input} type="text" placeholder='New todo...' onKeyPress={handleKeyPress} />
    </>
  )
}
