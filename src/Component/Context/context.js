import { createContext, useState } from "react";

export let CounterContext = createContext(0);

export default function CounterContextProvider(props) {
  //   const [counter, setCounter] = useState(0);
  let [counter, setCounter] = useState(0);
  let increment = () => {
    setCounter((counter += 1));
  };
  let decrment = () => {
    setCounter((counter -= 1));
  };
  return (
    <CounterContext.Provider value={{ counter, increment, decrment }}>
      {props.children}
    </CounterContext.Provider>
  );
}
