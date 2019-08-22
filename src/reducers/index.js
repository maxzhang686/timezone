import { combineReducers } from "redux";
import user from "./user";
import logged from "./logged";

export default combineReducers({
  user,
  logged
});
