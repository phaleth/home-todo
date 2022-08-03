import styles from './todo-item.module.scss';
import CheckButton from './todo-item/check-button';
import DeleteButton from './todo-item/delete-button';

export default ({ item, index, setItems, filter, setFilteredItems }): JSX.Element => {
  return (
    <li className={styles.item}>
      <CheckButton item={item} index={index} setItems={setItems} filter={filter} setFilteredItems={setFilteredItems} />
      <span className={styles.text}>{item.text}</span>
      <DeleteButton item={item} index={index} setItems={setItems} filter={filter} setFilteredItems={setFilteredItems} />
    </li>
  )
}
