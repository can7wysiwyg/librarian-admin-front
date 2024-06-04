import axios from "axios"
import { SHOW_USER, SHOW_USERS, USER_ERROR } from "./types"
import { ApiUrl } from "../../helpers/ApiUrl"
import { librarianToken } from "../../helpers/AdminsTokens"


export function getUsers() {

    return async function(dispatch) {

        try {

            const response = await axios.get(`${ApiUrl}/adminuser/show_users`, {
                headers: {
                    Authorization: `Bearer ${librarianToken}`
                }
            })

            const users = response.data.users

            dispatch({type: SHOW_USERS, payload: users})

            
        } catch (error) {
            console.error(error)
            dispatch({type: USER_ERROR})
            throw error
        }

    }
}


export function getUser(id) {

    return async function(dispatch) {

        try {
            const response = await axios.get(`${ApiUrl}/adminuser/show_user/${id}`, {
                headers: {
                    Authorization: `Bearer ${librarianToken}`
                }
            })

            const user = response.data.user

            dispatch({type: SHOW_USER, payload: user})

            
        } catch (error) {
            console.error(error)
            dispatch({type: USER_ERROR})
            throw error
        }

    }
}