import { configureStore } from "@reduxjs/toolkit";
import { librarianRdcr } from "./reducers/librarian_Reducer";
import { mainadminRdcr } from "./reducers/mainadmin_Reducer";


export const store = configureStore({
    reducer: {
        librarianRdcr,
        mainadminRdcr
    

    },
    middleware:  (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false
        })

    }

})