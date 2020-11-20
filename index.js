import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import App from './App';
import Student from './Student';
import State from './State';
import Event from './Event';
import Parent from './Parent';
import PureComponent from './PureComponent'
import LifeCycle from './LifeCycle';
import Refs from './Refs';
import Hooks from './UseHooks';
import UseEffect from './UseEffect';
import ControlledUncontrolled from './ControlledUncontrolled';
import UseMemo from './UseMemo';
import HookParent from './HookParent';
import ReduxApp from './Redux';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducer/reducer';


//const firstName = createContext();
//const lastName = createContext();
//import CompA from './ContextAPI';


function getData(name){
  return name.name + " " + name.lname.toLowerCase();
}


const name = {
  name:"div",
  lname: "Pandey"
}

const store = createStore(reducer);  // created a store


ReactDOM.render(
  <Provider store={store}>
    <ReduxApp />
  </Provider>, document.getElementById('root'));
/*ReactDOM.render(<>
    <firstName.Provider value="Divysnhu">
      <lastName.Provider value="Pandey">
        <CompA />
      </lastName.Provider>
    </firstName.Provider>
  </>, document.getElementById('root'));
  export {firstName, lastName};
ReactDOM.render(
  <Student>Iam  a child
     <Student>Iam  a child
         <Student/>
     </Student>
  </Student>, document.getElementById("root"));
ReactDOM.render(<>
    <Student namee="Divyanshu" roll={1}/>
    <Student namee="Neha" roll={2}/>
    <Student namee="hhh" roll={3}/>
  </>, document.getElementById('root'))

*/
/*
let currDate = new Date();
currDate = currDate.getHours()
let Greeting = "";
let styleCss = {};
if( currDate >= 1 && currDate < 12){
     Greeting = "Good mornnig"
     styleCss = { color: "green"}
}
else {
     Greeting = "Good night"
     styleCss = { color: "orange"}
}


ReactDOM.render(
<>
    <Heading />
    <Para />
    <List />
    <h1>Hello Sir, <span style={styleCss}>{Greeting}</span></h1>
</>,

document.getElementById('root')


);

*/



//var React = require("react")
//var ReactDOM =  require("react-dom")







/*import React from 'react'
import ReactDOM from 'react-dom'

import "./index.css";

const name = "Divyanshu"

ReactDOM.render(
  <>
     <h1 style={{color:"green"}}> My name is {name} </h1>,
     <img src="https://picsum.photos/id/1/200/300" alt="random"/>
     <img src="https://picsum.photos/id/2/200/300" alt="random"/>
     <img src="https://picsum.photos/id/3/200/300" alt="random"/>
  </>,
  document.getElementById("root")
);
const el = <>
               <h1>Netflix series</h1>
               <p>My fav top 5</p>
               <ol>
                  <li>Dark</li>
                  <li>Serial killer</li>
                  <li>Jonny English</li>
                  <li>Money heist</li>
                  <li>hello</li>
               </ol>
           </>;



const fname = "Divyanshu";
const lname = "Pandey";

const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

ReactDOM.render(
  [<h1>My name is {`${fname} ${lname}  ${currDate}  ${currTime}` }</h1>
  ],
  document.getElementById("root")); */
