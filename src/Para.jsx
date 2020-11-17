import React from 'react'


class Para extends React.Component{

 constructor(props){
   super(props)
   this.props = props
 }

  render(){
    return <>
      <p className="para-el" style={ this.props.style}>
      <img src={"https://picsum.photos/id/"+Math.floor(Math.random() * 100)+"/300/200"} />
      <br />
      <br />
      {this.props.para}
      <br />
      <br />
      <br />
      <br />
      <div>Watch now</div>
      </p>
   </>
  }
}



export default Para
