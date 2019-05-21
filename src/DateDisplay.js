import React from "react";  

class DateDisplay extends React.Component{
    render()    {
         return (
            <div>
                <h1>{this.props.message}</h1> 
                <h1>It is {new Date().toLocaleTimeString()} now.</h1>
                <h1>my name is {this.props.owner.name}</h1>
                <h1>my Age is {this.props.owner.age}</h1>
                
               
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