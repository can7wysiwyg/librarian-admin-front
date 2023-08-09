import { createContext } from "react";
import AdminApi from "./api/AdminApi";
import AuthorsApi from "./api/AuthorsApi";
import GenresApi from "./api/GenresApi";
import SuperAdminApi from "./api/SuperAdminApi"
import BooksApi from "./api/BooksApi";

export const GlobalState = createContext()


export const DataProvider = ({children}) => {
    let token = JSON.parse(JSON.stringify(localStorage.getItem('token')))
    let supertoken = JSON.parse(JSON.stringify(localStorage.getItem('supertoken')))


    const state = {
        token: token,
        supertoken: supertoken,
        adminApi: AdminApi(),
        authorsApi: AuthorsApi(),
        genresApi: GenresApi(),
        superAdminApi: SuperAdminApi(),
        booksApi: BooksApi()

    }


    return(
        <GlobalState.Provider value={state}>
            {children}

        </GlobalState.Provider>
    )



}

