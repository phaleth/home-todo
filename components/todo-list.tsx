import styles from '../components/todo-list.module.scss';

export default ({ items, setItems }) => {
  const handleCheckmarkClick = (evt, i) => {
    items[i].done = !items[i].done;
    setItems([...items]);
  }

  const handleDelBtnClick = (evt, i) => {
    items.splice(i, 1);
    setItems([...items]);
  }

  return (
    <ul className={styles.list}>
      {items.map((item, i) => (
        <li key={i} className={styles.item}>
          <img className={item.done ? styles.radioBtnChecked : styles.radioBtnEmpty}
            src={item.done ? 'images/circle-checkmark.png' : 'images/circle-empty.png'}
            onClick={evt => handleCheckmarkClick(evt, i)}
          />
          <span className={styles.text}>{item.text}</span>
          <img className={`${styles.delBtn} ${item.done ? '' : styles.hidden}`}
            src='images/circle-cancel.png'
            onClick={evt => handleDelBtnClick(evt, i)}
          />
        </li>
      ))}
    </ul>
  )
}
