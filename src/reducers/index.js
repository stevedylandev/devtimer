import {combineReducers} from "redux";
import inputSecondsReducer from "../reducers/inputSeconds";
import pauseReducer from "../reducers/pause";

const allReducers = combineReducers({
    inputSeconds: inputSecondsReducer,
    pause: pauseReducer,
});

export default allReducers;