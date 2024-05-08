import axios from "axios"
import { EDIT_GENRE, ERADICATE_GENRE, GENRE_CREATE, GENRE_ERROR, GET_GENRE, SHOW_GENRES } from "./types"
import { ApiUrl } from "../../helpers/ApiUrl"
import { librarianToken } from "../../helpers/AdminsTokens"

export function GenreCreate(data) {
    return async function(dispatch) {

        try {
            const response = await axios.post(`${ApiUrl}/genre/create_genre`, data, {
                headers: {
                    Authorization: `Bearer ${librarianToken}`
                }
            })

            dispatch({type: GENRE_CREATE})
            alert(response.data.msg)
            window.location.href = "/book_genres"

            
        } catch (error) {
            console.error(error)
            dispatch({type: GENRE_ERROR})
            throw error
        }

    }
}


export function getGenres() {

    return async function(dispatch) {

        try {

            const response = await axios.get(`${ApiUrl}/genre/show_all`)

            const genres = response.data.genres

            dispatch({type: SHOW_GENRES, payload: genres})
            
        } catch (error) {
            console.error(error)
            dispatch({type: GENRE_ERROR})
            throw error
        }


    }

}


export function SingleGenre(id) {
    return async function(dispatch) {

        try {

            const response = await axios.get(`${ApiUrl}/showgenre/show_single/${id}`)

            const genre = response.data.genre

            dispatch({type: GET_GENRE, payload: genre})
            
        } catch (error) {
            console.error(error)
            dispatch({type: GENRE_ERROR})
            throw error
        }

    }
}


export function editGenre(id, data) {

    return async function(dispatch) {

        try {

            const response = await axios.put(`${ApiUrl}/genre/edit_genre/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${librarianToken}`
                }
            })

            dispatch({type: EDIT_GENRE})
            alert(response.data.msg)
            window.location.href = `/genre_single/${id}`
            
        } catch (error) {

            console.error(error)
            dispatch({type: GENRE_ERROR})
            throw error
            
        }

    }

}



export function EradicateGenre(id) {

    return async function(dispatch) {

        try {

            const response = await axios.delete(`${ApiUrl}/genre/delete_genre/${id}`, {
                headers: {
                    Authorization: `Bearer ${librarianToken}`
                }
            })

            dispatch({type: ERADICATE_GENRE})

            alert(response.data.msg)
            window.location.href = "/show_book_genres"
            
        } catch (error) {

            console.error(error)
            dispatch({type: GENRE_ERROR})
            throw error
            
        }

    }

}