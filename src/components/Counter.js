import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    console.log(count)
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
    console.log(count)
  }
  return <div onClick={increment}>{count}</div>;
}

export default Counter;
