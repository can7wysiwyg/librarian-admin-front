import { createContext } from "react";
import AdminApi from "./api/AdminApi";
import AuthorsApi from "./api/AuthorsApi";

export const GlobalState = createContext()


export const DataProvider = ({children}) => {
    let token = JSON.parse(JSON.stringify(localStorage.getItem('token')))

    const state = {
        token: token,
        adminApi: AdminApi(),
        authorsApi: AuthorsApi()

    }


    return(
        <GlobalState.Provider value={state}>
            {children}

        </GlobalState.Provider>
    )



}

