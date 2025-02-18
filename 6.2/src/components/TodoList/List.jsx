import { useSelector } from "react-redux";
import Item from "./Item";
import s from "./TodoList.module.css";

export const List = () => {
  const todos = useSelector((state) => state.todos.items);
  return (
    <ul className={s.list}>
      {todos.map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </ul>
  );
};
