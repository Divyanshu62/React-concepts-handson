import React, {useState, useMemo, useEffect} from 'react';



const UseMemo = ()=>{
 const [i,setI] = useState(1);
 const ClickI = () => {
     setI(i + 3);
 }
 console.log("render ");

 const memo = useMemo(()=>{
   return <ChildMemo />
 },[])
 return (
   <>
    <h1>i - {i}</h1>
    <button onClick={ClickI}>Click i</button>
    {memo}
    <ChildMemo />

   </>
 )
}


const ChildMemo = () =>{
  let renderCount = 0;
  useEffect(()=>{
    renderCount++;
    console.log("render child");
  })
  return (
     <div>renderCount: {renderCount}</div>
  )
}


export default UseMemo;
