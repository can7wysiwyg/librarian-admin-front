import {AUTH_MAIN_ADMIN_LOGIN, MAIN_ADMIN_SHOW, AUTH_MAIN_ADMIN_ERROR} from "../actions/types"


export function mainadminRdcr(state={}, action) {
    switch(action.type) {
        case AUTH_MAIN_ADMIN_LOGIN:
            return {...state, authenticated: true}

        case MAIN_ADMIN_SHOW:
            return{...state, mainadmin: action.payload}    

        case AUTH_MAIN_ADMIN_ERROR:
            return{...state, error: "there was a problem"}  
            
        default:
            return state

    }
}