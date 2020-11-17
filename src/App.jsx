import React,{Component} from 'react';
import Heading from './Heading';
import Para from './Para';
import List from './List';
import data from './data'



function showPara(item,index){
  if(item.type == "amazon"){
    return  <Para key={item.id} style={{"background-color":"#092090"}} para={item.title}/>
    } else {
    return  <Para key={item.id} style={{"background-color":"#a90000"}} para={item.title}/>
    }

}

class App extends Component{
  render(){
    return <>
      <Heading title="This is new title"/>
      <div className="para-wrapper">
        { data.map(showPara)}
      </div>
    </>
  }
}



export default App;
