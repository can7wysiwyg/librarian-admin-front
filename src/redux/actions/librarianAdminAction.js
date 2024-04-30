import axios from "axios"
import { ApiUrl } from "../../helpers/ApiUrl"
import { librarianToken } from "../../helpers/AdminsTokens"
import {AUTH_LIBRARIAN_ADMIN_ERROR, AUTH_LIBRARIAN_ADMIN_LOGIN, LIBRARIAN_ADMIN_SHOW} from "./types"

export function librarianAdminLog(data) {
    return async function(dispatch) {
       try {

        const response = await axios.post(`${ApiUrl}/admin/login`, data)

        if(response.data.msg) {
            alert(response.data.msg)

        } else {
            localStorage.setItem("librarianToken", response.data.librarianToken)
                window.location.href = "/"

        }

        dispatch({type: AUTH_LIBRARIAN_ADMIN_LOGIN})
        
       } catch (error) {
        console.error(error)
        dispatch({type: AUTH_LIBRARIAN_ADMIN_ERROR})
        throw error
       }

    } 
}


export function librarianAdminGet() {
    return async function(dispatch) {
        try {

            if(!librarianToken || librarianToken === null || librarianToken === undefined) {
                return ""
            }

            const response = await axios.get(`${ApiUrl}/admin/librarian`, {
                headers: {
                    Authorization: `Bearer ${librarianToken}`
                }
            })

            

            const librarian = response.data.admin

            
            dispatch({type: LIBRARIAN_ADMIN_SHOW, payload: librarian})
            
        } catch (error) {
            console.error(error)
            dispatch({type: AUTH_LIBRARIAN_ADMIN_ERROR})
            throw error
        }
    }
}