import { useEffect, useRef, useState } from "react";
import { ButtonsContainer, MainContainer } from "./styled";

interface CountdownProps {
  seconds: number;
}

const formatTime = (time: number) => {
  let hours: string | number = Math.floor(time / 3600);
  let minutes: string | number = Math.floor((time - hours * 3600) / 60);
  let seconds: string | number = Math.floor(time - hours * 3600 - minutes * 60);

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  return hours + ":" + minutes + ":" + seconds;
};

const Component = ({ seconds }: CountdownProps) => {
    console.log({seconds});
  const [countdown, setCountdown] = useState(seconds);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const timerId = useRef<any | undefined>(undefined);

  useEffect(() => {
    if (isRunning) {
        console.log(countdown);
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
    setCountdown(0);
  };

  const stop = () => {
    clearInterval(timerId.current);
    setIsRunning(!isRunning);
  };

  const start = () => {
    setIsRunning(!isRunning);
    console.log(isRunning);
  };

  return (
    <MainContainer>
      <h2 className="text-center">{formatTime(countdown)}</h2>
      <ButtonsContainer className="pt-2">
        <button className="btn btn-primary" onClick={restart}>
          Restart
        </button>
        <button className="btn btn-danger" onClick={stop}>
          Stop
        </button>
        <button className="btn btn-success" onClick={start}>
          Iniciar
        </button>
      </ButtonsContainer>
    </MainContainer>
  );
};

export { Component as Countdown };
export default Component;
