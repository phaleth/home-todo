import styles from '../components/task-counter.module.scss';

export default ({ items }) => {
  const incompleteTaskCount = items.filter(item => !item.done).length;

  return (
    <span>
      <strong className={styles.counter}>{incompleteTaskCount}</strong> tasks left
    </span>
  )
}
