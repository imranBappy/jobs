
import alertReducer from './alertReducer'
const { combineReducers } = require("redux");

const reducer = combineReducers({
    alert: alertReducer,
})

export default reducer