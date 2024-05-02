import { BOOK_ERROR, BOOK_UPLOAD  } from "../actions/types";

export function bookRdcr(state={}, action) {

    switch(action.type) {

        case BOOK_UPLOAD:
            return{...state, msg: "successful"}

        
        case BOOK_ERROR:
            return{...state, error: "there was a problem"}
            
        default:
            return state    

    }

}