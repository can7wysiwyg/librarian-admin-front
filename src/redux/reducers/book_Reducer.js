import { BOOK_ACCORDING_TO_GENRE, BOOK_ERROR, BOOK_SINGLE, BOOK_UPLOAD, DELETE_BOOK, SHOW_BOOKS, UPDATE_BOOK_AUTHOR, UPDATE_BOOK_DESCRIPTION, UPDATE_BOOK_GENRE, UPDATE_BOOK_PDF, UPDATE_BOOK_PICTURE, UPDATE_BOOK_TITLE  } from "../actions/types";

export function bookRdcr(state={}, action) {

    switch(action.type) {

        case BOOK_UPLOAD:
            return{...state, msg: "successful"}

        case SHOW_BOOKS:
            return{...state, books: action.payload}
            
        case BOOK_SINGLE:
            return{...state, book: action.payload} 

        case BOOK_ACCORDING_TO_GENRE:
            return{...state, bookGen: action.payload}    
            
        case UPDATE_BOOK_AUTHOR:
            return{...state, msg: "successful"} 
            
        case UPDATE_BOOK_TITLE:
            return{...state, msg: "successful"}  
            
        case UPDATE_BOOK_GENRE:
             return{...state, msg: "successful"}  
             
        case UPDATE_BOOK_DESCRIPTION:
            return{...state, msg: "successful"}    
         
        case UPDATE_BOOK_PICTURE:
            return{...state, msg: "successful"}

        case UPDATE_BOOK_PDF:
            return{...state, msg: "successful"}  
            
            
        case DELETE_BOOK:
            return{...state, msg: "successful"}    

        
        case BOOK_ERROR:
            return{...state, error: "there was a problem"}
            
        default:
            return state    

    }

}