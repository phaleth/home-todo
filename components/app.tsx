import { useState } from 'react';
import styles from './app.module.scss';

export default () => {
  const [items, setItems] = useState([
    {done: false, text: 'Buy groceries'},
    {done: true, text: 'Walk the dog'},
  ]);

  return (
    <main className={styles.container}>
      <section className={styles.field}>
        <img className={styles.checklist} src='images/checklist.png' />
        <input className={styles.input} type="text" placeholder='New todo...' />
        <button type="button" className={styles.add}>Add</button>
      </section>
      <section className={styles.controls}>
        <section className={styles.dblCheckComplete}>
          <img className={styles.dblCheckMark} src='images/double-checkmark.png' />
          <button type="button" className={styles.complete}>Complete all tasks</button>
        </section>
        <button type="button" className={styles.clear}>Clear completed</button>
      </section>
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
