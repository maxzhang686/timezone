import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeUserName } from './actions';
        
import './App.css';

class Appredux extends Component {
  handleClick = () =>{
    //change username in store
    const user = {userName :'Xiao Hei'}
    this.props.changeUserName(user)
  };
  render() {
    return (  
      <div className="App">
            HI  {this.props.myUserName}
            <br/>
            <button onClick={this.handleClick}> Click me</button>
            
      </div>
    );
  }
}

function mapStateToProps(state){
  //what kind of value do we want to use in current page?
return{
myUserName: state.user.userName
}
};

export default connect(
  // get data from store
  mapStateToProps,

  //sent data to store and change
  {
  changeUserName:changeUserName
  }
)(Appredux);
//high order component???