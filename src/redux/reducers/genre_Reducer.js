import { GENRE_ERROR, GENRE_CREATE, SHOW_GENRES } from "../actions/types";

export function genreRdcr(state={}, action) {

    switch(action.type) {

        case GENRE_CREATE:
            return{...state, msg: "successful"}

        
        case  SHOW_GENRES:
            return{...state, genres: action.payload}    
    

        case GENRE_ERROR:
            return{...state, error: "there was a problem"}
            
        default:
            return state    

    }

}