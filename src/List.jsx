import React from 'react';


function List(props){

  return(
      <ol>
         {props.list.map((item, index) => (
           <li key={index}>{ item }</li>
         ))}
      </ol>
   )
}

export default List
