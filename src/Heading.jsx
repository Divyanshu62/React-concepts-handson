import React from 'react'


function Heading(props){
  console.log("headings", props);
  return (
    <h1  className="title-el">{ props.title }</h1>
  )
}

export default Heading
