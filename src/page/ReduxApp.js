/* eslint-disable no-mixed-operators */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeUserName, changeLoggedState}  from '../actions';

        
import './App.css';

class ReduxApp extends Component {

  constructor(){
    super();
    this.state = {
      userName :'',
    };
}
  handleFieldChange= (e) =>   {
    this.setState({
    [e.target.name]: e.target.value,
    });
    }

  handleSubmit = (e) =>{
    //change username in store
    e.preventDefault(); 
    
    console.log(this.state)
    const user = {userName : this.state.userName}
    this.props.changeUserName(user)
  };


  handleClick = () =>{
    const user = {userName : 'Admin'}
    this.props.changeUserName(user)
  }

  handleLoggedOut = () => {
    const logged = {loggedState : 'not_logged_in',userName:"..." }
    this.props.changeLoggedState(logged);
    this.props.changeUserName(logged);

  }

  logIn = (param) => {
    // Dispatch an event
    // Change username in store
    const logged = {loggedState:"logged_in", userName:"Max"};
    this.props.changeLoggedState(logged);
    this.props.changeUserName(logged);

  };

  componentDidMount() {
    this.logIn();
  }


  render() {
    return (  
      <div className="App">
            HI  {this.props.myUserName}
            <br/>
            <button onClick={this.handleClick}> Be Admin</button>

            <form style={{margin: 20 }} onSubmit={this.handleSubmit.bind(this)}>
            
              <label htmlFor="userName">Type your Name</label>{" "}
              <input type="text" className="form-control" id="userName" name="userName" 
              value={this.state.userName} onChange={this.handleFieldChange.bind(this)}/>
              <br/>
              <br/>

              <button type="submit" className="btn btn-primary">Change Name</button> 
            </form>

            Your Logged State is : {this.props.myLoggedState}
            {/* <button onClick={this.handleLoggedOut}>Logged out</button> */}
            {" "}
            { this.props.myLoggedState === "logged_in" && <button onClick={this.handleLoggedOut}>log out</button> || <button onClick={this.logIn}>log in</button> }


      </div>
    );
  }
}

function mapStateToProps(state){
  //what kind of value do we want to use in current page?
return{
myUserName: state.user.userName,
myLoggedState: state.logged.loggedState
}
};

export default connect(
  // get data from store
  mapStateToProps,

  //sent data to store and change
  {
  changeUserName:changeUserName,
  changeLoggedState:changeLoggedState
  }
)(ReduxApp);
//high order component???