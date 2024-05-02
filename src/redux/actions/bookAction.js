import axios from "axios"
import { BOOK_ERROR, BOOK_UPLOAD } from "./types"
import { ApiUrl } from "../../helpers/ApiUrl"
import { librarianToken } from "../../helpers/AdminsTokens"

export function BookUpload(data) {
    return async function(dispatch) {

        try {
            const response = await axios.post(`${ApiUrl}/adminbook/add_book`, data, {
                headers: {
                    Authorization: `Bearer ${librarianToken}`
                }
            })

            dispatch({type: BOOK_UPLOAD})
            alert(response.data.msg)

            window.location.href ="/show_books"

            
        } catch (error) {
            console.error(error)
            dispatch({type: BOOK_ERROR})
            throw error
        }

    }
}