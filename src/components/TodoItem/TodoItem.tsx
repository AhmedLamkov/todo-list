import { useCallback } from "react";
import classnames from "classnames";
import "./TodoItem.css";

interface Props {
  id: string;
  name: string;
  completed?: boolean;
  onToggle: (id: string) => void;
}

const TodoItem = ({id, name, completed, onToggle}: Props) => {
  const handleToggle = useCallback(() => {
    onToggle(id);
  }, [onToggle, id]);

  return (
    <div className={classnames('todo__item', { 'todo__item--completed': completed })} data-testid="todo-item">
      <input type="checkbox" name={id} checked={completed} onChange={handleToggle} />
      {name}
    </div>
  )
};

export default TodoItem;