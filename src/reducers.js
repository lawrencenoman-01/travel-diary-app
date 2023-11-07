import { combineReducers } from "redux";
import homeReducer from './pages/Homepage/reducer'
import registerReducer from "./pages/Register/reducer";
import loginReducer from "./pages/Login/reducer";

const rootReducer = combineReducers({
    homeReducer: homeReducer,
    registerReducer: registerReducer,
    loginReducer: loginReducer,
})

export default rootReducer