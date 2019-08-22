import React from "react";
// import moment from 'moment';
import moment from "moment-timezone";
import styled from "styled-components";
import axios from "axios";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: this.props.city,
      location: {},
      current: {}
    };
  }

  getLocTime() {
    switch (this.state.locations) {
      case "Beijing":
        return moment().tz("Asia/Shanghai");
      case "Moscow":
        return moment().tz("Europe/Moscow");
      case "Sydney":
        return moment().tz("Australia/Sydney");
      case "New York":
        return moment().tz("America/New_York");
      default:
    }
  }

  handleClick = e => {
    this.resetTimer();
    this.setState({
      locations: e.target.id
    });
  };

  resetTimer() {
    clearInterval(this.timerId);
    this.timerId = setInterval(() => {
      this.setState({ time: this.getLocTime() });
    }, 200);
  }

  async componentDidMount() {
    this.resetTimer();

    //2.use promise
    axios
      .get(
        "https://api.apixu.com/v1/current.json?key=a3b32e153da34193a69111804192707&q=Beijing"
      )
      .then(response => {
        this.setState({ ...response.data });
      })
      .catch(err => console.loge(err));
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <TimeCard>
        <LocBar>
          {["Beijing", "Sydney", "Moscow", "New York"].map(city => (
            <LocButton id={city} key={city} onClick={this.handleClick}>
              {city}
            </LocButton>
          ))}
        </LocBar>
        <LocName>
          {this.state.locations} {this.state.current.feelslike_c}
        </LocName>

        <LocImg src={"./img/" + this.state.locations + ".jpg"} />

        <LocDate>{this.getLocTime().format("YYYY-MM-DD dddd")}</LocDate>
        <br />
        <LocTime>
          <div>
            <span style={{ background: "#766d6dc9" }}>
              {this.getLocTime().format("HH")}
            </span>{" "}
            :{" "}
            <span style={{ background: "#766d6dc9" }}>
              {this.getLocTime().format("mm")}
            </span>{" "}
            :{" "}
            <span style={{ background: "#766d6dc9" }}>
              {this.getLocTime().format("ss")}
            </span>
          </div>

          {/* <div style={{background:'#766d6dc9'}}>{this.getLocTime().format('HH')}</div>
        <div style={{background:'#766d6dc9'}}>{this.getLocTime().format('mm')}</div>
        
        <div style={{background:'#766d6dc9'}}>{this.getLocTime().format('ss')}</div> */}
        </LocTime>
      </TimeCard>
    );
  }
}

export default Clock;

const TimeCard = styled.div`
  display: inline-block;
  text-align: center;
  margin: 10px;
  position: relative;
  width: 300px;
  height: 350px;
  background-color: #7b72722e;
  box-shadow: 10px 10px 10px grey;
  border-radius: 10px;
`;

const LocBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 10%;
`;

const LocButton = styled.button`
  border: 0;
  outline: none;
  display: inline-block;
  width: 25%;
  height: 100%;
  background-color: white;
  opacity: 0.4;
  &:hover {
    opacity: 0.6;
  }
`;

const LocName = styled.div`
  position: absolute;
  top: 10%;
  width: auto;
  height: 10%;
  margin: 10px;
  font-size: 20px;
  font-weight: 500;
`;

const LocImg = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 10px 10px 0 0;
`;

const LocDate = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #080808b3;
`;

const LocTime = styled.div`
  display: inline-block;
  font-size: 25px;
  font-weight: 700;
  color: #08080885;
`;
