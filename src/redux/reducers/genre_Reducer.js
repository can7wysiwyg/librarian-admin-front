import { GENRE_ERROR, GENRE_CREATE, SHOW_GENRES, GET_GENRE, ERADICATE_GENRE, EDIT_GENRE, CREATE_SUB_GENRE } from "../actions/types";

export function genreRdcr(state={}, action) {

    switch(action.type) {

        case GENRE_CREATE:
            return{...state, msg: "successful"}

        
        case  SHOW_GENRES:
            return{...state, genres: action.payload} 

        case CREATE_SUB_GENRE:
            return{...state, msg: "successful"}    
            
        case GET_GENRE:
            return{...state, genre: action.payload}

        case ERADICATE_GENRE:
            return{...state, msg: "successful"}
            
            
        case EDIT_GENRE:
            return{...state, msg: "successful"}    

    
        case GENRE_ERROR:
            return{...state, error: "there was a problem"}
            
        default:
            return state    

    }

}