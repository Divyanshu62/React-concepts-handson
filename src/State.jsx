import React, {Component} from 'react';
// to update state, use setState()
export default class Student extends React.Component{

  constructor(props){
    super(props)
    this.props =  props;
    this.state = {
      name: "Diyanshu",
      age: "12",
      roll: this.props.roll
    }
  }

  


 render(){
   return <h1>Hello, {this.state.name}, and I am {this.state.age}, my roll is {this.props.roll}</h1>
 }
}
