import { ChangeEvent, useCallback, useMemo, useState, MouseEvent } from 'react';
import { v4 as uuid } from 'uuid';
import { Filter, TodoItem as TodoItemType } from "../../types";
import Button from '../Button';
import Filters from '../Filters';
import Input from "../Input";
import TodoItem from "../TodoItem";
import "./Todo.css";

const Todo = () => {
  const [todoItems, setTodoItems] = useState<TodoItemType[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState<Filter>(Filter.ALL);

  const handleAdd = useCallback(() => {
    setTodoItems((state) => ([...state, { id: uuid(), name: inputValue, completed: false }]));
    setInputValue('');
  }, [inputValue]);

  const handleDelete = useCallback(() => {
    setTodoItems((state) => state.filter(item => !item.completed));
  }, [])

  const handleToggle = useCallback((id: string) => {
    setTodoItems((state) => state.map(item => item.id === id
        ? { ...item, completed: !item.completed }
        : item
      )
    )
  }, [])

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  const handleChangeFilter = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setFilter(e.currentTarget.value as Filter);
  }, []);

  const activeItems = useMemo(() => todoItems.filter(item => !item.completed), [todoItems]);

  const filteredItems = useMemo(() => {
    if (filter === Filter.ALL) {
      return todoItems;
    }

    if (filter === Filter.ACTIVE) {
      return activeItems;
    }

    return todoItems.filter(item => item.completed)
  }, [activeItems, filter, todoItems]); 

  return (
    <div className="todo">
      <Input value={inputValue} onChange={handleInputChange} onSubmit={handleAdd}/>
      {filteredItems.map((item) => (
        <TodoItem key={item.id} id={item.id} name={item.name} completed={item.completed} onToggle={handleToggle}/>
      ))}
      <div className="todo__actions">
        <span>{activeItems.length} items left</span>
        <Filters activeFilter={filter} onChange={handleChangeFilter} />
        <Button onClick={handleDelete} text="Clear completed"></Button>
      </div>
    </div>
  )
};

export default Todo;