import { useState } from "react";
import { Countdown } from "./components/Countdown";
import { Button, CardContainer, Input, MainContainer } from "./styled";
import { Navbar } from "../../components/Navbar";

const Component = () => {
  const [time, setTime] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTime(+value);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsReady(true);
  };

  return (
    <>
      <Navbar />
      <MainContainer>
        <CardContainer className="card w-50 mb-2">
          <div className="card-body">
            <h5 className="card-title">Enter the time in seconds.</h5>
            <Input className="form-control mb-2" onChange={onInputChange} />
            <Button className="btn" onClick={onSubmit}>
              Send
            </Button>
          </div>
        </CardContainer>
        {isReady && (
          <CardContainer className="card w-50">
            <Countdown seconds={time} />
          </CardContainer>
        )}
      </MainContainer>
    </>
  );
};

export { Component as Timer };
export default Component;
