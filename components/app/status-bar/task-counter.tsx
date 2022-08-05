import { useContext } from 'react';
import styles from './task-counter.module.scss';
import { ItemsContext } from '../../app';
import { Item } from '../../../types/item';

export default () => {
  const items: Item[] = useContext(ItemsContext);

  const incompleteTaskCount = items.filter((item: Item) => !item.done).length;

  return (
    <span>
      <strong className={styles.counter}>{incompleteTaskCount}</strong> tasks left
    </span>
  )
}
