import { useState } from "react";
import { TodoForm } from "../TodoForm";
import { ContainerWrapper, TitleWrapper } from "./styled";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "../Todo";
import { EditTodoForm } from "../EditTodoForm";

uuidv4();

export interface TaskProps {
  id: string;
  title: string;
  done: boolean;
  isEditing: boolean;
}

const Component = () => {
  const [todos, setTodos] = useState<TaskProps[]>([]);

  const addTodo = (todo: string) => {
    setTodos([
      ...todos,
      { id: uuidv4(), title: todo, done: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task: string, id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <ContainerWrapper>
      <TitleWrapper>TODO List</TitleWrapper>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        todo.isEditing ? (
            <EditTodoForm key={`${index}-${todo.title}`} editTodo={editTask} task={todo}/>
        ) : (
            <Todo
            task={todo}
            key={`${index}-TODO`}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
       
      ))}
    </ContainerWrapper>
  );
};

export { Component as TodoWrapper };
export default Component;
