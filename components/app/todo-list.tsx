import styles from './todo-list.module.scss';
import TodoItem from './todo-list/todo-item';

export default ({ setItems, filter, filteredItems, setFilteredItems }) => {
  return (
    <ul className={styles.list}>
      {filteredItems.map((item, i) => (
        <TodoItem key={i} item={item} index={i} setItems={setItems} filter={filter} setFilteredItems={setFilteredItems} />
      ))}
    </ul>
  )
}
