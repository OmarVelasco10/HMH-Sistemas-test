import { Navbar } from "../../components/Navbar";
import { TodoWrapper } from "./components/TodoWrapper";
import { MainContainer } from "./styled";

const Component = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <TodoWrapper />
      </MainContainer>
    </>
  );
};

export { Component as TodoPage };
export default Component;
