import React,{Component} from 'react';

export default class Event extends Component {

 constructor(props){
   super(props);
   this.state = {
     id:1,
     name:"Divyanshu"
   }
  // this.click =  this.click.bind(this)
 }


click = () => {
  console.log("button clicked");
}
handleClickArg = () => {
  this.click(this.state.id)
}
/*  click(e){
    e.preventDefault();
    // this.setState({"name":"pandey"});
    this.setState(function(state, props){
       return {
         name: "new name"
       }
    })
    console.log("Button Clicked", this.state.name);
  /*} */
  render(){
    return (
      <div>
        <h1>Hello, {this.state.name}</h1>
        <button onClick={this.handleClickArg}>Click</button>
      </div>

    )

  }
}
