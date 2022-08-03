import styles from './new-todo.module.scss';
import AddButton from './new-todo/add-button';
import TodoInput from './new-todo/todo-input';

export default ({ setItems, filter, setFilteredItems }): JSX.Element => {
  return (
    <section className={styles.field}>
      <TodoInput setItems={setItems} filter={filter} setFilteredItems={setFilteredItems} />
      <AddButton setItems={setItems} filter={filter} setFilteredItems={setFilteredItems} />
    </section>
  )
}
