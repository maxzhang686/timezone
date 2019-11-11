import React from "react";
import axios from "axios";

class Promise extends React.Component {
  // constructor(){
  //   super();
  //   this.state ={ weather:{}};
  // }
  state = {
    isLoading: false,
    current: {},
    location: {}
  };

  async componentDidMount() {
    // await axios
    //   .get(
    //     "https://api.apixu.com/v1/current.json?key=a3b32e153da34193a69111804192707&q=Paris"
    //   )
    //   .then(response => console.log(response))
    //   ;
    this.setState({ isLoading: true });
    //1.use async/await
    try {
      const response = await axios.get(
        "http://api.weatherstack.com/current?access_key=96c64b5837e59f09ae6d8d56f134fc63&query=Sydney"
      );
      //use destructring to put all data's property-value pairs into state
      this.setState({ ...response.data, isLoading: false });
      console.log(response.data);
    } catch (err) {
      console.log(err);
      this.setState({ isLoading: false });
    }

    //2.use promise
    axios
      .get(
        "http://api.weatherstack.com/current?access_key=96c64b5837e59f09ae6d8d56f134fc63&query=Sydney"
      )
      .then(response => {
        //use destructring to put all data's property-value pairs into state
        this.setState({ ...response.data });
      })
      .catch(error => console.loge(error));
  }

  render() {
    //if server hasn't reponded - show message
    if (this.state.isLoading) return "please wait...";

    //Show responded data
    return (
      <div>
        {this.state.location.name} is {this.state.current.temperature} degrees.
      </div>
    );
  }
}
export default Promise;
