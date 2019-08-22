import React from "react";
import { parseDuration, padLeft } from "../utilities";

//event handing
class StopWatch extends React.Component {
  state = { duration: 0, isRunning: false };

  handleStart = () => {
    this.setState({ duration: 0, isRunning: true }); // new lap, clear the duration

    // update duration per second (per 1000 ms)
    this.timerID = setInterval(() => {
      const newDuration = this.state.duration + 200;
      this.setState({ duration: newDuration });
    }, 200);
  };

  handleStop = () => {
    this.setState({ isRunning: false });
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  };

  render() {
    const { seconds, minutes } = parseDuration(this.state.duration);
    return (
      <div>
        <h2>
          {padLeft(minutes)}:{padLeft(seconds)}
        </h2>
        <button onClick={this.handleStart} disabled={this.state.isRunning}>
          Start
        </button>
        <button onClick={this.handleStop} style={{ marginLeft: 20 }}>
          Stop
        </button>
      </div>
    );
  }
}

export default StopWatch;
