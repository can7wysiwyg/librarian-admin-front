import { createContext } from "react";
import AdminApi from "./api/AdminApi";


export const GlobalState = createContext()


export const DataProvider = ({children}) => {
    let token = JSON.parse(JSON.stringify(localStorage.getItem('token')))

    const state = {
        token: token,
        adminApi: AdminApi(),

    }


    return(
        <GlobalState.Provider value={state}>
            {children}

        </GlobalState.Provider>
    )



}

