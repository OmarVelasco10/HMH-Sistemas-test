import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { IconContainer, MainContainer, Title } from './styled';
import { TaskProps } from "../TodoWrapper";

interface TodoProps {
  task: TaskProps;
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string) => void;
}

const Component = (props: TodoProps) => {
  const { task, toggleComplete, deleteTodo, editTodo } = props;
  return (
    <MainContainer>
      <Title onClick={() => toggleComplete(task.id)} done={task.done}>
        {task.title}
      </Title>
      <IconContainer>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
        <FontAwesomeIcon icon={faTrash} onClick={ () => deleteTodo(task.id)}/>
      </IconContainer>
    </MainContainer>
  );
};

export { Component as Todo };
export default Component;
