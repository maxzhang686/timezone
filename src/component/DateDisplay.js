import React from "react";  




class DateDisplay extends React.Component{
    render()    {
         return (
            
            <div>
                <h4>{this.props.message}</h4> 
                <h4>It is {new Date().toLocaleDateString()} now.</h4>
                <h3>my name is {this.props.owner.name}</h3>
                <h3>my Age is {this.props.owner.age}</h3>
                
               
            </div>             
        );   
    }
}
export default DateDisplay;


// function DateDisplay(){
//     return(

//             <div>
//                 <h1>It is {new Date().toLocaleTimeString()} now.</h1>            
//             </div>
//     );
// }
// export default DateDisplay;