import React, {useState} from 'react';



const ControlledUncontrolled = () => {

  const [text, setText] = useState();
  const [fullText, setFullText] = useState();

  const InputEvent = (e) => {
    setText(e.target.value);
    console.log("key pressed", e.target.value);
  }

  const setValue = () => {
      setFullText(text)
  }
  return (
    <>
        <h1>Hello, {fullText}</h1>
        <input type="text" placeholder="Enter ur name"  onChange={InputEvent}/>
        <input type="button" value="Click" onClick={setValue} />
    </>
  )
}

export default ControlledUncontrolled;
