import { filterItems } from './filter.service';

export const addTodo = (evt, items, setItems, filter, setFilteredItems) => {
  const todoTxtEl = evt.target.parentElement.querySelector('input');
  const todoTxt = todoTxtEl.value;
  if (!todoTxt) {
    alert('Item text is not defined');
  } else if (
    items.find(item => item.text.toLowerCase() === todoTxt.toLowerCase())
  ) {
    alert('Item already exists');
  } else {
    todoTxtEl.value = '';
    items.push({ done: false, text: todoTxt });
    setItems([...items]);
    filterItems(filter, items, setFilteredItems);
  }
};
