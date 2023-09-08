import React, { useState } from "react";
import { FormTodo, Input, Button } from "./styled";

interface FormProps {
    addTodo: (todo: string) => void;
}

const Component = ({ addTodo }: FormProps) => {
    
    const [value, setValue] = useState("");

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setValue(value);
    }

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        addTodo(value);

        setValue("");
    }
  return (
    <FormTodo onSubmit={onSubmit}>
      <Input type="text" placeholder="Qué harás hoy?" onChange={onInputChange} value={ value }/>
        <Button type="submit" onClick={onSubmit}>Agregar tarea</Button>
    </FormTodo>
  );
};

export { Component as TodoForm };
export default Component;
