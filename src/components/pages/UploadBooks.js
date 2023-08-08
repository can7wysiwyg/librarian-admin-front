import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { GlobalState } from "../../GlobalState";


function UploadBooks() {
    const state = useContext(GlobalState)
    const token = state.token;
    const[authors, setAuthors] = state.authorsApi.authors
    const[genres, setGenres] = state.genresApi.genres
    const[values, setValues] = useState({bookTitle: "", bookISBN: "", bookGenre: "", bookReleaseDate: "", bookAuthor: "", bookDescription: ""})
    const[bookImage, setBookImage] = useState(false)
    const[bookFile, setBookFile] = useState(false)


    const handleChange = (event) => {
        const {name, value} = event.target

        setValues((prevValues) => ({ ...prevValues, [name]: value }))

    }

    const handleBookImageUpload = (event) => {
        const file = event.target.files[0];
        setBookImage(file);
      };
    
      const handleBookFileUpload = (event) => {
        const file = event.target.files[0];
        setBookFile(file);
      };


      const handleSubmit = async(event) => {
        event.preventDefault();

    const formData = new FormData();

   formData.append('bookAuthor', values.bookAuthor)
   formData.append('bookDescription', values.bookDescription)
   formData.append('bookGenre', values.bookGenre)
   formData.append('bookISBN', values.bookISBN)
   formData.append('bookTitle', values.bookTitle)
   formData.append('bookReleaseDate', values.bookReleaseDate)
   formData.append('bookImage', bookImage)
   formData.append('bookFile', bookFile)

   const res = await axios.post('/books/add_book', formData, {
    headers: {
        Authorization: `Bearer ${token}`
    }
   } )

alert(res.data.msg)




      }
    



    return(<>
    
    
    
    </>)
}

export default UploadBooks