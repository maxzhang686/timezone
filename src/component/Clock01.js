import React from "react";

class Clock01 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    //Fires immediately when dom element is mounted
    this.updateTime();
  }

  updateTime() {
    this.timerID = setInterval(() => this.setState({ time: new Date() }), 100);
  }

  componentWillUnmount() {
    //clear when unmount
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>It is {this.state.time.toLocaleTimeString()}.</h1>
      </div>
    );
  }
}

export default Clock01;
