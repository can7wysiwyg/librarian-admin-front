import { DEFAULT_MAIN_ADMIN_ERROR, MAIN_ADMIN_CREATE_LIBRARIAN, MAIN_ADMIN_VIEW_LIBRARIAN } from "../actions/types";

export function tasksRdcr(state={}, action) {

    switch(action.type) {

        case MAIN_ADMIN_CREATE_LIBRARIAN:
            return{...state, msg: "succcess"}

        case MAIN_ADMIN_VIEW_LIBRARIAN:
            return{...state, result: action.payload}    

        case DEFAULT_MAIN_ADMIN_ERROR:
            return{...state, msg: "there was a problem"}
            
        default:
            return state    

    }


}