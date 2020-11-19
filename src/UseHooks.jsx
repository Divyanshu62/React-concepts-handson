import React, {useState} from 'react';

const UseHooks = () => {
  //const state = useState();
  let [obj, setCount] = useState({"name":"divyanshu","age":12});

  const IncNumber = () => {
    obj = {"name":"div","age":122}
    setCount(obj); // my doubt is here how and object should get updated as a state
    console.log(obj);
  }

  return (
    <>
    <h1>{obj.name}</h1>
    <button onClick={IncNumber}>Click</button>
    </>
   )
}


export default UseHooks
