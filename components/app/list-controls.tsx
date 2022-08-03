import styles from './list-controls.module.scss';
import ClearCompleted from './list-controls/clear-completed';
import CompleteAll from './list-controls/complete-all';

export default ({ setItems, filter, setFilteredItems }): JSX.Element => {
  return (
    <section className={styles.controls}>
      <CompleteAll setItems={setItems} filter={filter} setFilteredItems={setFilteredItems} />
      <ClearCompleted setItems={setItems} filter={filter} setFilteredItems={setFilteredItems} />
    </section>
  )
}
