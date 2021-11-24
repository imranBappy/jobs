import * as Types from '../types'

const init = {
    message: '',
    error: false
}

const alertReducer = (state = init, action) =>{
    document.documentElement.scrollTop = 0;
    switch(action.type){
        case Types.SET_ALERT:
            return{
                message: action.payload.message,
                error: action.payload.error,
            }
        default:
            return state
    }

}

export default alertReducer;