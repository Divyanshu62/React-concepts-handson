import React from 'react';
import PT from 'prop-types'

const Student= (props) => {
  return <h1>Hello,{props.name} -your rool no. is {props.roll}</h1> ;
}

const Stu = (props) => {
  return <div>Hello, {props.children}</div>
}


Student.propTypes ={
  name: PT.string,
  roll: PT.number
}

Student.defaultProps = {
  name: "Divayns"
}
export default Stu;
