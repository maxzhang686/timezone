export const logged = (state = { loggedState: "logged_in" }, action) => {
  switch (action.type) {
    case "CHANGE_LOGGED_STATE":
      return {
        ...state,
        loggedState: action.loggedState
      };

    default:
      return state;
  }
};

export default logged;
