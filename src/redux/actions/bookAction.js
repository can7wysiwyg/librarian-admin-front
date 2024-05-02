import axios from "axios"
import { BOOK_ERROR, BOOK_SINGLE, BOOK_UPLOAD, SHOW_BOOKS } from "./types"
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


export function BooksShow() {
    return async function(dispatch) {

        try {
            const response = await axios.get(`${ApiUrl}/books/show_all`)
            const books = response.data.books

            dispatch({type: SHOW_BOOKS, payload: books})
            
        } catch (error) {
            console.error(error)
            dispatch({type: BOOK_ERROR})
            throw error
        }

    }
}


export function SingleBook(id) {

    return async function(dispatch) {

        try {

            const response = await axios.get(`${ApiUrl}/books/single_book/${id}`)

            const book = response.data.book

            dispatch({type: BOOK_SINGLE, payload: book})
            
        } catch (error) {
            console.error(error)
            dispatch({type: BOOK_ERROR})
            throw error
            
        }
    }

} 