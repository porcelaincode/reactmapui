import {combineReducers} from "redux";
import countryNames from "./countrynames";

const rootReducer = combineReducers({
    countryNames,
});

export default rootReducer;