import { configureStore } from "@reduxjs/toolkit";
import { librarianRdcr } from "./reducers/librarian_Reducer";
import { mainadminRdcr } from "./reducers/mainadmin_Reducer";
import { genreRdcr } from "./reducers/genre_Reducer";
import { bookRdcr } from "./reducers/book_Reducer";
import { tasksRdcr } from "./reducers/mainadmintasks_Reducer";
import { userRdcr } from "./reducers/user_Reducer";


export const store = configureStore({
    reducer: {
        librarianRdcr,
        mainadminRdcr,
        genreRdcr,
        bookRdcr,
        tasksRdcr,
        userRdcr
        
    

    },
    middleware:  (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false
        })

    }

})