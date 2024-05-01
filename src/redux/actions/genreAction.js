import axios from "axios"
import { GENRE_CREATE, GENRE_ERROR, SHOW_GENRES } from "./types"
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