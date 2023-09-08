import { useState } from "react";
import { Button, FormTodo, Input } from "./styled";
import { TaskProps } from "../TodoWrapper";

  interface FormProps {
    editTodo: (task: string, id: string) => void
    task: TaskProps;
}

const Component = (props: FormProps) => {
  const { editTodo, task } = props;
  console.log(task);
    
    const [value, setValue] = useState(task.title);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setValue(value);
    }

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(value);

        editTodo(value, task.id);
    }
  return (
    <FormTodo onSubmit={onSubmit}>
      <Input type="text" placeholder="Actualiza tu tarea" onChange={onInputChange} value={ value }/>
        <Button type="submit" onClick={onSubmit}>Actualizar tarea</Button>
    </FormTodo>
  );
};

export { Component as EditTodoForm };
export default Component;
