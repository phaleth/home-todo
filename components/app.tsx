import { useState } from 'react';
import styles from './app.module.scss';
import NewTodo from './new-todo';
import ListControls from './list-controls';
import TodoList from './todo-list';
import StatusBar from './status-bar';

export default (): JSX.Element => {
  const [items, setItems] = useState([
    {done: false, text: 'Buy groceries'},
    {done: true, text: 'Walk the dog'},
  ]);

  return (
    <main className={styles.container}>
      <NewTodo items={items} setItems={setItems} />
      <ListControls items={items} setItems={setItems} />
      <hr />
      <TodoList items={items} setItems={setItems} />
      <hr />
      <StatusBar />
    </main>
  )
}
