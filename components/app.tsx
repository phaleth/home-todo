import { useState, createContext } from 'react';
import styles from './app.module.scss';
import NewTodo from './new-todo';
import ListControls from './list-controls';
import TodoList from './todo-list';
import StatusBar from './status-bar';

export const ItemsContext = createContext(null);

export default (): JSX.Element => {
  const [items, setItems] = useState([
    {done: false, text: 'Buy groceries'},
    {done: true, text: 'Walk the dog'},
  ]);

  const [filter, setFilter] = useState('All');

  const [filteredItems, setFilteredItems] = useState([...items]);

  return (
    <ItemsContext.Provider value={items}>
      <main className={styles.container}>
        <NewTodo setItems={setItems} filter={filter} setFilteredItems={setFilteredItems} />
        <ListControls setItems={setItems} filter={filter} setFilteredItems={setFilteredItems} />
        <hr />
        <TodoList setItems={setItems} filter={filter} filteredItems={filteredItems} setFilteredItems={setFilteredItems} />
        <hr />
        <StatusBar setFilter={setFilter} setFilteredItems={setFilteredItems} />
      </main>
    </ItemsContext.Provider>
  )
}
