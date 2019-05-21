import React, { Component } from 'react';
import logo from './logo.svg';
import DateDisplay from "./DateDisplay";
import Card from './Card';
import './App.css';


const title = ['Dog', 'Cat', 'Bird'];
const subTitle = ['t1','t2','t3'];
const img = [
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/237/200/300'
]


class App extends Component {
  render() {
    return ( 
      <div className="App">
        <header className="App-header">
        <DateDisplay 
        message={`It is ${new Date().toLocaleDateString()} now.`} 
        owner={ {name:'jackie',age:'27'}}
        />


        <Card  title={title[0]} subTitle={subTitle[0]} img={img[0]}/>
        <Card  title={title[1]} subTitle={subTitle[1]} img={img[0]}/>
        <Card  title={title[2]} subTitle={subTitle[2]} img={img[0]}/>

        
        </header>
      </div>
    );
  }
}

export default App;
