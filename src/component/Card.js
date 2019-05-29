import React, { Component } from 'react';

import '../App.css';

// const Card = function (props){
  
//   const {title, img, subTitle} = props

//   return <div>
//     <h1>{title}</h1>
//     <small>{subTitle}</small>
//     <br/>
//     <img src={img} alt=""/>

//   </div>

// }
 
class Card extends Component {
  render() {
    return ( 
      <div className="App">
    
        
        <h1>{this.props.title}</h1>
        <small>{this.props.subTitle}</small>
        <br/>
        <img src={this.props.img} alt=""/>
        
           
      </div>
    );
  }
} 

export default Card;

 
