import { TodoWrapper } from "./components/TodoWrapper";
import { MainContainer } from "./styled";

const Component = () => {
  return (
    <MainContainer>
      <TodoWrapper />
    </MainContainer>
  );
};

export { Component as TodoPage };
export default Component;
