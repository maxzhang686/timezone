import React from "react";
// import moment from 'moment';
import moment from "moment-timezone";
import styled from "styled-components";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment()
        .tz(this.props.tz)
        .format("Do MMMM YYYY, h:mm:ss a")
    };
  }
  componentDidMount() {
    this.updateTime();
  }
  updateTime() {
    this.timerid = setInterval(
      () =>
        this.setState({
          time: moment()
            .tz(this.props.tz)
            .format("Do MMMM YYYY, h:mm:ss a")
        }),

      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerid);
  }

  render() {
    const { tz } = this.props;
    //way 2
    const { time } = this.state;

    return (
      <CityName>
        <div>
          <h5>{tz}</h5>
        </div>
        {/* way 1 */}
        <div>
          <h5>{this.state.time}</h5>
        </div>
        {/* way 2 */}
        <div>
          <h5>{time}</h5>
        </div>
      </CityName>
    );
  }
}

export default Clock;

const CityName = styled.div`
  background-color: blue;
  height: 320px;
  width: 320px;
`;
