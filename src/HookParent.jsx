
import React, {useState} from  'react';

 function useCustomCounter() {
  const [count, setCount] = useState(0)
  const handleInc = () => {
    setCount(count + 1);
  };

  return [count, handleInc];
}

const HookParent = () => {
  const [countInstance1, setCounterIncInstance1] =  useCustomCounter();

  const inc1 = () => {
    setCounterIncInstance1(countInstance1 + 1)
  }

  const [countInstance2, setCounterIncInstance2] =  useCustomCounter();

  const inc2 = () => {
    setCounterIncInstance2(countInstance2 + 1)
  }


  return (
    <>
        <h1>Count Up : {countInstance1}</h1>
        <button onClick={inc1}>Click</button>
        <h1>Count Up : {countInstance2}</h1>
        <button onClick={inc2}>Click</button>
    </>
  )
}

export default HookParent;
