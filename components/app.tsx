import styles from './app.module.scss';

export default () => {
  return (
    <main className={styles.container}>
      <section className={styles.input}>
        <img src='images/checklist.png' />
        <input type="text" />
      </section>
      <section className={styles.controls}>
        <section className={styles.dblCheckComplete}>
          <img src='images/double-checkmark.png' />
          <button type="button" className={styles.complete}>Complete all tasks</button>
        </section>
        <button type="button" className={styles.clear}>Clear completed</button>
      </section>
      <hr />
      <ul className={styles.list}>
        <li>
          <img src='images/circle-empty.png' />
          Text
          <img src='images/circle-cancel.png' />
        </li>
      </ul>
      <hr />
      <section className={styles.statusBar}>
        <span><strong className={styles.count}>3</strong> tasks left</span>
        <nav className={styles.filter}><span className={styles.selectedFilter}>All</span><span>Incomplete</span><span>Complete</span></nav>
      </section>
    </main>
  )
}
