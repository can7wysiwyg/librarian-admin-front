import axios from "axios"
import { ApiUrl } from "../../helpers/ApiUrl"
import { supertoken } from "../../helpers/AdminsTokens"


export function mainAdminLog(data) {
    return async function(dispatch) {
       try {

        const response = await axios.post(`${ApiUrl}/mainadmin/login`, data)

        if(response.data.msg) {
            alert(response.data.msg)

        } else {
            localStorage.setItem("supertoken", response.data.supertoken)
                window.location.href = "/"

        }

        dispatch({type: AUTH_MAIN_ADMIN_LOGIN})
        
       } catch (error) {
        console.error(error)
        dispatch({type: AUTH_MAIN_ADMIN_ERROR})
        throw error
       }

    } 
}


export function mainAdminGet() {
    return async function(dispatch) {
        try {

            if(!supertoken || supertoken === null || supertoken === undefined) {
                return ""
            }

            const response = await axios.get(`${ApiUrl}/mainadmin/mainadmin`, {
                headers: {
                    Authorization: `Bearer ${supertoken}`
                }
            })

            const mainadmin = response.data.mainadmin

            dispatch({type: MAIN_ADMIN_SHOW, payload: mainadmin})
            
        } catch (error) {
            console.error(error)
            dispatch({type: AUTH_MAIN_ADMIN_ERROR})
            throw error
        }
    }
}