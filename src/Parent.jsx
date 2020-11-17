import React from 'react';
import Child from './Child'

export default class Parent extends React.Component{


   constructor(props){
     super(props);

     this.state = {
       name: "Divyanshu"
     }

     this.click.bind(this);
   }


    click = (newName) => {
       this.setState(function(state, props){
         return {name: newName}
       })
      console.log("new value", newName)
    }


    render(){
      return (
        <>
            Parent component {this.state.name}
            <Child name="Neha" customeClick={this.click} />
        </>
      )
    }
}
