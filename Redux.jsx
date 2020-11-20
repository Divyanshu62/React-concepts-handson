import React from 'react';
import { connect } from 'react-redux'; // subscribe to store

const ReduxApp = (props)=>{
  console.log(props);
  return (
    <>
     <div>I am the app {props.myname}</div>

     <button onClick={()=>{props.changeName("Neha")}} >Click </button>
     </>
  )
}

const mapStateToProps = (state) => {
  return  {
    myname:state.name
  }
}


 const mapDisptachToProps = (dispatch) => {
   return {
     changeName:(name)=>{dispatch({type:'CHANGE_NAME' , payload:name})}
   }
 }
export default connect(mapStateToProps,mapDisptachToProps)(ReduxApp);
// wrap the component as Higher order component
// which receives a component as params
// connect return a HOD
