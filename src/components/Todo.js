import { useState } from "react";
import styles from "./Todo.module.css";

const Todo = () => {
  const [todos, setTodos] = useState([
    {
			id: 1,
      text: "Revise Advance JS",
      completed: false,
    },
    {
			id: 2,
      text: "Revise React Basics",
      completed: true,
    },
    {
			id: 3,
      text: "Revise HTML",
      completed: true,
    },
  ]);

  return (
    <div className={styles.mainContainer}>
      <input className={styles.addTodoInput} type="text" placeholder="Add todo item ..." />
      <button className={styles.addTodoButton}>Add todo</button>
      <div className={styles.todoListContainer}>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}{" "}
              </span>
              <span>
                <button>✅</button> <button>❌</button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
