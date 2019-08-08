// export const user = (state = {}, action) => {
//   switch (action.type) {
//     case "SIGN_IN":
//       return Object.assign({}, state, { status: "signed_in" });
    
//     default: 
//     return state;
//   }
// };

//es6 
export const user = (state = {userName:"Max"}, action) => {
  switch (action.type) {
    case "CHANGE_USER_NAME":
      return{
      ...state, 
      userName: action.userName
      };
    
    default: 
    return state;
  }
};

export default user;