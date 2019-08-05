import React, { Component } from 'react';
import styled from 'styled-components';
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
    
        <CardDisplay>  
        <h1>{this.props.cardInfo.title}</h1>
        <small>{this.props.cardInfo.subTitle}</small>
        <br/>
        <img src={this.props.cardInfo.img} alt=""/>
        
        </CardDisplay>
      
      </div>
    );
  }
} 

export default Card;

 
const CardDisplay = styled.div`
    display: inline-block;
  text-align: center;
  margin: 10px;
  width: 400px;
  height: auto;
  padding: 10px;
  background-color: #7b72722e;
  box-shadow: 10px 10px 10px grey;
  border-radius:10px;
`;