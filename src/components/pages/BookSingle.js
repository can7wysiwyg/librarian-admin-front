import { useContext, useEffect, useState, useRef } from "react"
import { useParams } from "react-router-dom"
import { GlobalState } from "../../GlobalState"
import "../styles/booksingle.css"
import moment from "moment/moment";


function BookSingle() {
    const{id} = useParams()
    const state = useContext(GlobalState)
    const[books] = state.booksApi.books
    const[newBook, setNewBook] = useState({})
    const [fadeIn, setFadeIn] = useState(false);
    const bookDetailsRef = useRef(null);



    useEffect(() => {

        if(id) {
            books.forEach((book) => {
                if(book._id === id) setNewBook(book)
            })
        }

    }, [id, books])

    useEffect(() => {
        setFadeIn(true);
      }, []);
    




    return(<>

<div
            className={`book-details ${fadeIn ? "fade-in" : ""}`}
            ref={bookDetailsRef}

            style={{ marginTop: "3rem", textAlign: "center", fontFamily: "Helvetica" }}
          >
            <h2>{newBook.bookTitle}</h2>
            <img src={newBook.bookImage} alt="Book Cover" style={{width: "100%", height: "30vh", objectFit: "contain"}} />
            <a href={`/show_author/${newBook.bookAuthor}`}
              className="card-title"
              style={{ textDecoration: "none" }}
            >
              {newBook.bookAuthor}
            </a>
            {/* <p>Author: {writer?.AuthorName}</p> */}
            {/* <p>Genre: {genres.bookGenre} </p> */}
            <p>Description: {newBook.bookDescription}</p>
            <p>Released On: {moment(newBook.bookReleaseDate).format("MMM D YYYY")}</p>
    
            
          </div> 

    
    
    
    </>)
}

export default BookSingle