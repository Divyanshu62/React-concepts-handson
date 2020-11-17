import React from 'react';

import data from './data'



export default class Child extends React.Component {


    constructor(props){
      super(props);
      this.middleClick.bind(this)
    }

    middleClick = (e) => {
        this.props.customeClick(e.target.id)
    }


    render(){
      return (
        <div> child component
            {data.map((item,index) => {
                 return   <button key={item.id} id={item.title}  onClick={this.middleClick}>{item.title}</button>
            })}
        </div>
      )
    }

}
