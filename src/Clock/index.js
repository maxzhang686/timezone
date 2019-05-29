import React from 'react';
// import moment from 'moment';
import moment from 'moment-timezone';
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {time: moment().tz(this.props.tz).format('Do MMMM YYYY, h:mm:ss a')}
  }
  componentDidMount(){
    this.updateTime()
  }
  updateTime(){
   this.timerid = setInterval(()=>this.setState({time:moment().tz(this.props.tz).format('Do MMMM YYYY, h:mm:ss a')}),1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerid)
  }

  render(){
    const{time} = this.state;
    const{tz} = this.props;
    return(

      <div>
        <h5>{time}</h5>
        <h5>{tz}</h5>
      </div>

    );
  }
}

export default Clock;