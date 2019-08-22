// export function changeUserName({ userName }) {
//   return {
//   type: "CHANGE_USER_NAME", //compulsory key!
//   userName
//   };
//    }

//es6
export const changeUserName = ({ userName }) => ({
  type: "CHANGE_USER_NAME", //compulsory key!
  userName
});

// export const changeUserNameExtended = param => {
//   const userName = param.userName;
//   return { type: "CHANGE_USER_NAME", //compulsory key!
//   userName: userName

//   };
// };
