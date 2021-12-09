import * as Types from '../actions/types';
const init = {
    club: [], length: 0
}
const clubReducer = (state = init, action) =>{
    switch (action.type) {
        case Types.SET_CLUB:
            return {
                club: action.payload.club,
                length: action.payload.length
            }
        default:
            return state;
    }
}
export default clubReducer;