import { useContext, useEffect, useState, useRef } from "react"
import { useParams } from "react-router-dom"
import { GlobalState } from "../../GlobalState"
import "../styles/booksingle.css"
import moment from "moment/moment";


function BookSingle() {
    const{id} = useParams()
    const state = useContext(GlobalState)
    const[books] = state.booksApi.books
    const [authors] = state.authorsApi.authors;
    const [writers, setWriters] = useState(""); 
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



      useEffect(() => {

        if(newBook.bookAuthor) {
          authors?.forEach((author) => {
            if(author._id === newBook.bookAuthor) setWriters(author)
          })
        }


      }, [newBook.bookAuthor, authors])
    
console.log(writers);

    return(<>

<div
            className={`book-details ${fadeIn ? "fade-in" : ""}`}
            ref={bookDetailsRef}

            style={{ marginTop: "3rem", textAlign: "center", fontFamily: "Helvetica" }}
          >
            <h2>{newBook.bookTitle}</h2>
            <img src={newBook.bookImage} alt="Book Cover" style={{width: "100%", height: "30vh", objectFit: "contain"}} />
            <a href={`/show_author/${writers._id}`}>
              {writers.authorName}
            </a>
            
            <p>Description: {newBook.bookDescription}</p>
            <p>Released On: {moment(newBook.bookReleaseDate).format("MMM D YYYY")}</p>
    
            
          </div> 

    
    
    
    </>)
}

export default BookSingle