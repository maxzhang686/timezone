import React, { Component } from 'react';
import logo from './logo.svg';
import DateDisplay from "./DateDisplay";
import './App.css';


 
const Card = function (props){
  
  const {title, img, subTitle} = props

  return <div>
    <h1>{title}</h1>
    <small>{subTitle}</small>
    <br/>
    <img src={img} alt=""/>

  </div>

}
 
class App extends Component {
  render() {
    return ( 
      <div className="App">
        <header className="App-header">
        
        <DateDisplay owner={ {name:'jackie',age:'27'}} />
        <Card title="Dog" subTitle="this is a dog" img="https://picsum.photos/id/237/200/300"/>
        <Card title="Cat" subTitle="this is a cat" img="https://picsum.photos/id/237/200/300"/>
        <Card title="bird" subTitle="this is a bird" img="https://picsum.photos/id/237/200/300"/>


        </header>
      </div>
    );
  }
} 

export default App;
