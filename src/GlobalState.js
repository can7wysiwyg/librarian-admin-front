import { createContext } from "react";
import AdminApi from "./api/AdminApi";
import AuthorsApi from "./api/AuthorsApi";
import GenresApi from "./api/GenresApi";

export const GlobalState = createContext()


export const DataProvider = ({children}) => {
    let token = JSON.parse(JSON.stringify(localStorage.getItem('token')))

    const state = {
        token: token,
        adminApi: AdminApi(),
        authorsApi: AuthorsApi(),
        genresApi: GenresApi()

    }


    return(
        <GlobalState.Provider value={state}>
            {children}

        </GlobalState.Provider>
    )



}

