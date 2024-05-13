import axios from "axios"
import { DEFAULT_MAIN_ADMIN_ERROR, MAIN_ADMIN_CREATE_LIBRARIAN, MAIN_ADMIN_VIEW_LIBRARIAN } from "./types"
import { ApiUrl } from "../../helpers/ApiUrl"
import { supertoken } from "../../helpers/AdminsTokens"


export function MakeLibrarian(data) {
    return async function(dispatch) {

        try {

            const response = await axios.post(`${ApiUrl}/mainadmin/create_librarian`, data, {
                headers: {
                    Authorization: `Bearer ${supertoken}`
                }
            }) 

            dispatch({type: MAIN_ADMIN_CREATE_LIBRARIAN})

            alert(response.data.msg)
            window.location.href = '/librarian_info'

            
        } catch (error) {
            console.error(error)
            dispatch({type: DEFAULT_MAIN_ADMIN_ERROR})
            throw error
        }

    }
}



export function ViewLibrarian() {
    return async function(dispatch) {

try {

    const response = await axios.get(`${ApiUrl}/mainadmin/show_to_main`, {
        headers: {
            Authorization: `Bearer ${supertoken}`
        }
    })

    const result = response.data.result

    dispatch({type: MAIN_ADMIN_VIEW_LIBRARIAN, payload: result})


    
} catch (error) {
    console.error(error)
            dispatch({type: DEFAULT_MAIN_ADMIN_ERROR})
            throw error

}

    }
}