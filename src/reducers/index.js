import {combineReducers} from "redux";
import countryNames from "./countrynames";
import toggleThemes from "./toggleTheme";

const rootReducer = combineReducers({
    countryNames,
    toggleThemes,
    
});

export default rootReducer;