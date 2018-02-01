import { combineReducers } from "redux";
import itemsReducer from "./modules/items";
import usersReducer from "./modules/profile";
import authReducer from "./modules/auth";
export default combineReducers({
  items: itemsReducer,
  profile: usersReducer,
  auth: authReducer
});
