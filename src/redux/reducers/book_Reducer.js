import { BOOK_ERROR, BOOK_SINGLE, BOOK_UPLOAD, SHOW_BOOKS  } from "../actions/types";

export function bookRdcr(state={}, action) {

    switch(action.type) {

        case BOOK_UPLOAD:
            return{...state, msg: "successful"}

        case SHOW_BOOKS:
            return{...state, books: action.payload}
            
        case BOOK_SINGLE:
            return{...state, book: action.payload}    

        
        case BOOK_ERROR:
            return{...state, error: "there was a problem"}
            
        default:
            return state    

    }

}