import React, { Component } from 'react';
 
import DateDisplay from "./component/DateDisplay";
// import Card from './Component/Card';
// import Clock01 from './component/Clock01';
import ClockWall from './page/ClockWall'
import StopWatch from './component/Stopwatch';
import List from "./component/Lists";
import Formhang from "./component/Form";

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
        <Formhang/>
        <div className="App">
            {/* <Card  title={title[0]} subTitle={subTitle[0]} img={img[0]}/>
            <Card  title={title[1]} subTitle={subTitle[1]} img={img[0]}/>
            <Card  title={title[2]} subTitle={subTitle[2]} img={img[0]}/> */}
            
            <ClockWall/>    
            <DateDisplay 
            message={`Web Open at : ${new Date().toLocaleTimeString()}`} 
            owner={ {name:'jackie',age:'27'}}   
            />
            <StopWatch/>
            <List superheroes={superheroes} />
            
        </div>
          


      </div>

      


    );
  }
}

export default App;
