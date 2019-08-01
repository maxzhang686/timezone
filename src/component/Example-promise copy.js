import React from 'react';
import axios from 'axios';

class Example extends React.Component{
  componentDidMount(){
    axios
      .get(
        "https://api.apixu.com/v1/current.json?key=a3b32e153da34193a69111804192707&q=Paris"
      )
      .then(response => {
        this.setState({weather: response.data});
        return axios.get(
          "https://api.apixu.com/v1/current.json?key=a3b32e153da34193a69111804192707&q=Beijing"
        ); 
      }) 
      .then(response => console.log(response))
      .catch(err => {console.log(err);})
      ;
      console.log("Sending request")
    }
    render(){
        return(
            <div>a</div>
        );
    }
}
export default Example;

