import { Item } from '../../types/item';
import styles from './todo-list.module.scss';
import TodoItem from './todo-list/todo-item';

export default ({ setItems, filter, filteredItems, setFilteredItems }): JSX.Element => {
  return (
    <ul className={styles.list}>
      {filteredItems.map((item: Item, i: number): JSX.Element => (
        <TodoItem key={i} item={item} index={i} setItems={setItems} filter={filter} setFilteredItems={setFilteredItems} />
      ))}
    </ul>
  )
}
