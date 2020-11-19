import React,{ Component } from 'react';


class Child extends Component {
  constructor(props){
    super(props)
    console.log("Child constructor called");
  }

  componentWillMount(){

    console.log("Child componentWillMount")
  }

  componentDidMount(){
     console.log("Child componentDidMount")
  }

  componentWillReceiveProps(){
    console.log("Child componentWillReceiveProps");
  }

  shouldComponentUpdate(nextProp, nextState){

    console.log("Child shouldComponentUpdate");
    return true;
  }

  componentWillUpdate(){
    console.log("Child componentWillUpdate");
  }

  componentDidUpdate(nextProp, nextState){
    console.log("Child componentDidUpdate");
  }
  componentWillUnmount(){
    console.log("Child componentWillUnmount");
  }

  render(){
    console.log("Child Render");
    return (
      <div> THis is child - {this.props.text} </div>
    )
  }
}

export default class LifeCycle extends Component {

 constructor(props){
   super(props)
   this.state = {
     val: "hello"
   }
   //this.changeState.bind(this)
   console.log("constructor called");
 }

 componentWillMount(){
   if( window.innerWidth < 500){
     this.setState({val: "neha"})
   }
   console.log("componentWillMount")
 }

 componentDidMount(){
    console.log("componentDidMount")
 }

componentWillReceiveProps(){
  console.log("componentWillReceiveProps");
}

shouldComponentUpdate(nextProp, nextState){

  console.log("shouldComponentUpdate");
  return true;
}

componentWillUpdate(){
  console.log("componentWillUpdate");
}

componentDidUpdate(nextProp, nextState){
  console.log("componentDidUpdate");
}

componentWillUnmount(){
  console.log("componentWillUnmount");
}
 changeState() {
   this.setState({val:"Pandey"})
 }

  render(){
    console.log("Render")
    return (
      <div className="App">
      {this.state.val} -
      <Child text={this.state.val}/>
      <button onClick={this.changeState.bind(this)} >Click</button>
      </div>
    )
  }
}
