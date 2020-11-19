import React, { useState, useEffect} from 'react';


const UseEffect = () => {
  const [text1, setText1] = useState("Divyanshu");
  const [text2, setText2] = useState("Divya");

  useEffect( ()=>{
    console.log("I am clicked");
  },[])


  const ChangeText1 = () => {
    setText1("Neha")
  }
  const ChangeText2 = () => {
    setText2("Neha2")
  }
  return (
    <>
       <h1>{text1}</h1>
       <h1>{text2}</h1>
       <button onClick={ChangeText1}>Click</button>
       <button onClick={ChangeText2}>Click</button>
    </>
  )
}

export default UseEffect;
