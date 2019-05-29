import React,{Component} from 'react';
import Clock from '../Clock'
import '../App.css'

   
class ClockWall extends Component{

  render(){
    const tzs = ['Asia/Tokyo','America/New_York','Australia/Sydney','Europe/London'];
    
    return(
    <div> 
      <Clock tz={tzs[0]}/>
      <Clock tz={tzs[1]}/>
      <Clock tz={tzs[2]}/>
      <Clock tz={tzs[3]}/>
         
    </div>
    );
  }
}
export default ClockWall;