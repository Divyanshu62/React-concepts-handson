import React, { Component, PureComponent} from 'react';


const Temp = (props) => {
  return (
    <div>helo {props.val}</div>
  )
}

export default class App extends PureComponent {

  constructor(props){
    super(props)
    this.state = {
      val : 1
    }
  }

 componentDidMount(){ // executed when a component is mounted

     setInterval(()=> {
        this.setState(() => {
              return {val: 2}
        });
     }, 2000)

 }


/*
we can ignore this if using pure componet
shouldComponentUpdate(nextProp, nextState){
  console.log("nextstate ", nextState);
  console.log("state", this.state.val);
  return  (this.state.val === nextState.val ) ? false: true;
} */
  render(){
    return (
      <div className="app">
          <Temp val={this.state.val} />
      </div>
    )
  }
}
