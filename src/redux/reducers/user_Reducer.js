import { SHOW_USER, SHOW_USERS, USER_BORROWED_BOOKS, USER_ERROR } from "../actions/types";

export function userRdcr(state={}, action) {

    switch(action.type) {

        case SHOW_USERS:
            return{...state, users: action.payload}

        case SHOW_USER:
            return{...state, user: action.payload}

        case USER_BORROWED_BOOKS:
            return{...state, result: action.payload}    
            
        case USER_ERROR:
            return{...state, msg: "success"}
            
        default:
            return state
             

    }

}