import React from "react";
import axios from "axios";

class AwaitButton extends React.Component {
  state = {
    isLoading: false,
    current: {},
    location: {}
  };

  handleFetchWeather = async () => {
    this.setState({ isLoading: true });
    //1.use async/await
    try {
      const response = await axios.get(
        "http://api.weatherstack.com/current?access_key=96c64b5837e59f09ae6d8d56f134fc63&query=canberra"
      );
      //use destructring to put all data's property-value pairs into state
      this.setState({ ...response.data });
      console.log(response.data);
    } catch (err) {
      console.log(err);
      this.setState({ isLoading: false });
    }
  };

  render() {
    //if(this.state.isLoading) return "please wait...";
    const weatherInfo = `${this.state.location.name} is ${this.state.current.temperature} degrees`;

    return (
      <div>
        {this.state.isLoading && <div>{weatherInfo}</div>}
        <button
          onClick={this.handleFetchWeather.bind(this)}
          //disabled={this.state.isLoading}
          className={`btn btn-${this.props.buttonType}`}
        >
          {this.props.label}
        </button>
      </div>
    );
  }
}
export default AwaitButton;
// function Button(props) {
//     return (
//     <button className={`btn btn-${props.buttonType}`}>
//     {props.label}
//     </button> );
//     }

// export default Button;
