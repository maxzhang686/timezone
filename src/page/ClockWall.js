import React, { Component } from "react";
import Clock from "../Clock";
// import Clock from '../Clock/index02'
import styled from "styled-components";
import "../App.css";

class ClockWall extends Component {
  render() {
    // const tzs = ['Asia/Tokyo','America/New_York','Australia/Sydney','Europe/London'];

    return (
      <Wall>
        {/* <Clock tz={tzs[0]}/> */}
        <Clock key={"Beijing"} city={"Beijing"} />
        <Clock key={"Sydney"} city={"Sydney"} />
      </Wall>
    );
  }
}
export default ClockWall;

const Wall = styled.div`
  width: 100%;
  height: auto;
`;
