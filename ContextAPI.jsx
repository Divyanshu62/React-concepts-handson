import React, { useContext } from 'react';

import {firstName, lastName} from './/index.js';


const CompA = () => {
  return (
    <>
        <div>Hello component A</div>
        <CompB>
           <CompD/>
        </CompB>
        <CompC/>

   </>
  )
}


const CompB = () => {

  return (
    <>
       <div>Hello component B</div>
       <CompC/>
    </>
  )
}



const CompC = () => {
  const fName = useContext(firstName);
  const lName = useContext(lastName);
  return (
    <div>My name is {fName} {lName}</div>
      /*    <firstName.Consumer>
          {
            (fName) => {
                return (
                          <lastName.Consumer>
                            {
                              (lName)=>{
                                return (
                                        <div>My name is {fName} {lName}</div>
                                       )
                              }
                            }
                          </lastName.Consumer>
                       )
                     }
          }
          </firstName.Consumer> */
     )
  }



const CompD = () => {
  return (
    <>
       <div>Hello component D</div>
    </>
  )
}

export default CompA;
