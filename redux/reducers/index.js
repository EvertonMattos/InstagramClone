import { combineReducers } from "redux";
import user from "./users";

const Reducers = combineReducers({
  userStater: user,
});

export default Reducers;
