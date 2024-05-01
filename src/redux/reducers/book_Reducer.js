import { BOOK_ERROR, BOOK_UPLOAD, SHOW_GENRES } from "../actions/types";

export function bookRdcr(state={}, action) {

    switch(action.type) {

        case BOOK_UPLOAD:
            return{...state, msg: "successful"}

        case SHOW_GENRES:
            return{...state, genres: action.payload}    

        case BOOK_ERROR:
            return{...state, error: "there was a problem"}
            
        default:
            return state    

    }

}