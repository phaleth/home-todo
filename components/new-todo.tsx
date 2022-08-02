import styles from './new-todo.module.scss';

export default (): JSX.Element => {
  return (
    <section className={styles.field}>
      <img className={styles.checklist} src='images/checklist.png' />
      <input className={styles.input} type="text" placeholder='New todo...' />
      <button type="button" className={styles.add}>Add</button>
    </section>
  )
}
