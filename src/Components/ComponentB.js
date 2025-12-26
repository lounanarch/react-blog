import React, { useContext } from "react";
import { CountContext } from "./CountContext";


function ComponentA() {
  const { countState, countDispatch } = useContext(CountContext);

  return (
    <div>
      ComponentB - {CountContext.countState}

      <button onClick={() => countDispatch("increment")}>Increment</button>
      <button onClick={() => countDispatch("decrement")}>Decrement</button>
      <button onClick={() => countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentA;