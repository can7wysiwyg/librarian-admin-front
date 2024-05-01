import { configureStore } from "@reduxjs/toolkit";
import { librarianRdcr } from "./reducers/librarian_Reducer";
import { mainadminRdcr } from "./reducers/mainadmin_Reducer";
import { genreRdcr } from "./reducers/genre_Reducer";
import { bookRdcr } from "./reducers/book_Reducer";


export const store = configureStore({
    reducer: {
        librarianRdcr,
        mainadminRdcr,
        genreRdcr,
        bookRdcr
        
    

    },
    middleware:  (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false
        })

    }

})