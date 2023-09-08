import { useEffect, useRef, useState } from "react";
import { ButtonsContainer, MainContainer } from "./styled";
import { formatTime } from "../../../../../helpers";

interface CountdownProps {
  seconds: number;
}

const Component = ({ seconds }: CountdownProps) => {
  console.log({ seconds });
  const [countdown, setCountdown] = useState<number>(seconds);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const timerId = useRef<any | undefined>(undefined);

  useEffect(() => {
    setCountdown(seconds);
  }, [seconds]);

  useEffect(() => {
    if (isRunning) {
      timerId.current = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timerId.current as any);
  }, [isRunning]);

  useEffect(() => {
    if (countdown <= 0) clearInterval(timerId.current);
  }, [countdown]);

  const restart = () => {
    setCountdown(seconds);
  };

  const stop = () => {
    clearInterval(timerId.current);
    setIsRunning(!isRunning);
  };

  const start = () => {
    setIsRunning(!isRunning);
    console.log(isRunning);
  };

  const clear = () => {
    setCountdown(0);
  };

  return (
    <MainContainer>
      <h2 className="text-center">{formatTime(countdown)}</h2>
      <ButtonsContainer className="pt-2">
        <button className="btn btn-success" onClick={start}>
          Start
        </button>
        <button className="btn btn-danger" onClick={stop}>
          Stop
        </button>
        <button className="btn btn-primary" onClick={restart}>
          Restart
        </button>
        <button className="btn btn-warning" onClick={clear}>
          Clean
        </button>
      </ButtonsContainer>
    </MainContainer>
  );
};

export { Component as Countdown };
export default Component;
