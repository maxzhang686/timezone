import React, { Component } from 'react';
 
import DateDisplay from "./component/DateDisplay";
// import Card from './Component/Card';
// import Clock01 from './component/Clock01';
import ClockWall from './page/ClockWall'
import StopWatch from './component/Stopwatch';
import List from "./component/Lists";
import FormSignup from "./component/Form";
import Button from './component/Button';
import Example from './component/Example-promise';
import Flickrimg from './component/Flickrimg';
import Flicktry from './component/Flickrtry'

import './App.css';



// const title = ['Dog', 'Cat', 'Bird'];
// const subTitle = ['t1','t2','t3'];
// const img = [
//   'https://picsum.photos/id/237/200/300',
//   'https://picsum.photos/id/237/200/300',
//   'https://picsum.photos/id/237/200/300'
// ]


const superheroes = ['Batman', 'Superman'];
class App extends Component {

// constructor(props){
//   super(props);
//   const time =  new Date().toLocaleTimeString();
//   this.state = { 
//     time, }
// }

// componentDidMount(){
// setInterval(()=>{
//   this.setState({time:new Date().toLocaleTimeString()});
// }
//   ,100);
// }

  render() {
    return ( 
      <div>  

        
        <div className="App">
            

            <hr/>
            {/* <Card  title={title[0]} subTitle={subTitle[0]} img={img[0]}/>
            <Card  title={title[1]} subTitle={subTitle[1]} img={img[0]}/>
            <Card  title={title[2]} subTitle={subTitle[2]} img={img[0]}/> */}
            <h3 style={{color:'#ff0000'}}>Stateful component</h3>
            <ClockWall/> 

            <hr/>
            <h3 style={{color:'#ff0000'}}>React props and State</h3>
            <DateDisplay 
            message={`Web Open at : ${new Date().toLocaleTimeString()}`} 
            owner={ {name:'Louis',age:'27'}}   
            />

            <hr/>
            <h3 style={{color:'#ff0000'}}>Events handling in React</h3>
            <StopWatch/>

            <hr/>
            <h3 style={{color:'#ff0000'}}>Rendering list in React</h3>
            <List superheroes={superheroes} />

            <hr/>
            <h3 style={{color:'#ff0000'}}>Forms handling in React</h3>
            <FormSignup/> 
            
            <hr/>
            <h3 style={{color:'#ff0000'}}>Ajax (Promise,Axios)</h3>
            <Example/>

            <hr/>
            <h3 style={{color:'#ff0000'}}>Ajax (async/await): </h3>
            <Button buttonType="primary" label={<h1>Show temperature</h1>}/>


            <hr/>
            <h3 style={{color:'#ff0000'}}>Ajax (Fetch/Flickr Img Search):</h3>
            <Flickrimg/>

            <hr/>
            <h3 style={{color:'#ff0000'}}>Flickr Img Search:</h3>
            <Flicktry/>
        </div>
          


      </div>

      


    );
  }
}

export default App;
