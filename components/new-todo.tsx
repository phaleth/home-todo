import { filterItems } from '../services/filter.service';
import styles from './new-todo.module.scss';

export default ({ items, setItems, filter, setFilteredItems }): JSX.Element => {
  const addTodo = evt => {
    const todoTxtEl = evt.target.parentElement.querySelector('input');
    const todoTxt = todoTxtEl.value;
    if (!todoTxt) {
      alert('Item text is not defined');
    } else if (items.find(item => item.text.toLowerCase() === todoTxt.toLowerCase())) {
      alert('Item already exists');
    } else {
      todoTxtEl.value = '';
      items.push({done: false, text: todoTxt});
      setItems([...items]);
      filterItems(filter, items, setFilteredItems);
    }
  }

  const handleAddClick = evt => addTodo(evt);

  const handleKeyPress = evt => {
    if (evt.key === 'Enter') {
      addTodo(evt);
    }
  }

  return (
    <section className={styles.field}>
      <img className={styles.checklist} src='images/checklist.png' />
      <input className={styles.input} type="text" placeholder='New todo...' onKeyPress={handleKeyPress} />
      <button type="button" className={styles.add} onClick={handleAddClick}>Add</button>
    </section>
  )
}
