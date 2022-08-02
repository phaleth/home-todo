import { useState } from 'react';
import styles from './app.module.scss';
import NewTodo from './new-todo';
import ListControls from './list-controls';

export default (): JSX.Element => {
  const [items, setItems] = useState([
    {done: false, text: 'Buy groceries'},
    {done: true, text: 'Walk the dog'},
  ]);

  return (
    <main className={styles.container}>
      <NewTodo />
      <ListControls />
      <hr />
      <ul className={styles.list}>
        {items.map(item => (
          <li key={item.text} className={styles.item}>
            <img className={item.done ? styles.radioBtnChecked : styles.radioBtnEmpty}
              src={item.done ? 'images/circle-checkmark.png' : 'images/circle-empty.png'}
            />
            <span className={styles.text}>{item.text}</span>
            <img className={`${styles.delBtn} ${item.done ? '' : styles.hidden}`}
              src='images/circle-cancel.png'
            />
          </li>
        ))}
      </ul>
      <hr />
      <section className={styles.statusBar}>
        <span>
          <strong className={styles.count}>3</strong> tasks left
        </span>
        <nav className={styles.filter}>
          <span className={styles.selectedFilter}>All</span>
          <span>Incomplete</span>
          <span>Complete</span>
        </nav>
      </section>
    </main>
  )
}
