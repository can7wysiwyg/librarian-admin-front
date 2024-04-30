import {AUTH_LIBRARIAN_ADMIN_ERROR, LIBRARIAN_ADMIN_SHOW, AUTH_LIBRARIAN_ADMIN_LOGIN} from "../actions/types"


export function librarianRdcr(state={}, action) {
    switch(action.type) {
        case AUTH_LIBRARIAN_ADMIN_LOGIN:
            return {...state, authenticated: true}

        case LIBRARIAN_ADMIN_SHOW:
            return{...state, librarian: action.payload}    

        case AUTH_LIBRARIAN_ADMIN_ERROR:
            return{...state, error: "there was a problem"}  
            
        default:
            return state

    }
}