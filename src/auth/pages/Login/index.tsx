
import { MainContainer, FormContainer, Title, Button, Input } from "./styled";
import { useForm } from "../../../hooks/useForm";
import { startLogin } from "../../../store/auth";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { useEffect } from "react";
import Swal from "sweetalert2";

const formFields = {
  user: "",
  password: "",
};

const Component = () => {

  const dispatch = useAppDispatch();
  const { errorMessage } = useAppSelector( (state ) => state.auth);

  const {
    formState: { user, password },
    onInputChange,
  } = useForm(formFields);

  useEffect(() => {
    if (errorMessage !== null) {
      Swal.fire("Authentication error", errorMessage, "error");
    }
  }, [errorMessage]);

  const onLoginSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ user, password });
    // dispatch(checkingCredentials());
    dispatch(startLogin(user,password));
    
  };

  return (
    <MainContainer className="container">
      <FormContainer>
        <form className="rounded p-4 p-sm-3 form" onSubmit={onLoginSubmit}>
          <Title className="text-center">Login</Title>
          <div className="mb-3">
            <label htmlFor="user">Username</label>
            <Input
              type="text"
              className="form-control"
              placeholder="username"
              name="user"
              value={user}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              className="form-control"
              placeholder="password"
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </div>
          <Button  className="btn" onClick={onLoginSubmit}>Login</Button>
        </form>
      </FormContainer>
    </MainContainer>
  );
};

export { Component as Login };
export default Component;
