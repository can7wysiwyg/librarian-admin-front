import axios from "axios"
import { BOOK_ERROR, BOOK_SINGLE, BOOK_UPLOAD, SHOW_BOOKS, UPDATE_BOOK_AUTHOR, UPDATE_BOOK_DESCRIPTION, UPDATE_BOOK_GENRE, UPDATE_BOOK_TITLE } from "./types"
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

export function AuthorUpdate(id, data) {

    return async function(dispatch) {
        try {
            const response = await axios.put(`${ApiUrl}/adminbook/update_book_author/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${librarianToken}`
                }
            })

            dispatch({type: UPDATE_BOOK_AUTHOR})
            alert(response.data.msg)

            window.location.href = `/book_single/${id}`
            
        } catch (error) {

            console.error(error)
            dispatch({type: BOOK_ERROR})
            throw error
            
        }
    }

}


export function TitleUpdate(id, data) {

    return async function(dispatch) {
        try {
            const response = await axios.put(`${ApiUrl}/adminbook/update_book_title/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${librarianToken}`
                }
            })

            dispatch({type: UPDATE_BOOK_TITLE})
            alert(response.data.msg)

            window.location.href = `/book_single/${id}`
            
        } catch (error) {

            console.error(error)
            dispatch({type: BOOK_ERROR})
            throw error
            
        }
    }

}


export function DescriptionUpdate(id, data) {

    return async function(dispatch) {
        try {
            const response = await axios.put(`${ApiUrl}/adminbook/update_book_description/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${librarianToken}`
                }
            })

            dispatch({type: UPDATE_BOOK_DESCRIPTION})
            alert(response.data.msg)

            window.location.href = `/book_single/${id}`
            
        } catch (error) {

            console.error(error)
            dispatch({type: BOOK_ERROR})
            throw error
            
        }
    }

}


export function GenreUpdate(id, data) {

    return async function(dispatch) {
        try {
            const response = await axios.put(`${ApiUrl}/adminbook/update_book_genre/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${librarianToken}`
                }
            })

            dispatch({type: UPDATE_BOOK_GENRE})
            alert(response.data.msg)

            window.location.href = `/book_single/${id}`
            
        } catch (error) {

            console.error(error)
            dispatch({type: BOOK_ERROR})
            throw error
            
        }
    }

}