import styles from './new-todo.module.scss';

export default ({ items, setItems }): JSX.Element => {
  const handleAddClick = e => {
    const todoTxtEl = e.target.parentElement.querySelector('input');
    const todoTxt = todoTxtEl.value;
    if (!todoTxt) {
      alert('Item text is not defined');
    } else if (items.find(item => item.text.toLowerCase() === todoTxt.toLowerCase())) {
      alert('Item already exists');
    } else {
      todoTxtEl.value = '';
      items.push({done: false, text: todoTxt});
      setItems([...items]);
    }
  }

  return (
    <section className={styles.field}>
      <img className={styles.checklist} src='images/checklist.png' />
      <input className={styles.input} type="text" placeholder='New todo...' />
      <button type="button" className={styles.add} onClick={handleAddClick}>Add</button>
    </section>
  )
}
