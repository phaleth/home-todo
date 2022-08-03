import { useContext } from 'react';
import styles from './task-counter.module.scss';
import { ItemsContext } from '../../app';

export default () => {
  const items = useContext(ItemsContext);

  const incompleteTaskCount = items.filter(item => !item.done).length;

  return (
    <span>
      <strong className={styles.counter}>{incompleteTaskCount}</strong> tasks left
    </span>
  )
}
