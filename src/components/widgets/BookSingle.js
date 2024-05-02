import { useEffect, useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { SingleBook } from "../../redux/actions/bookAction"
import moment from "moment/moment"
import { SingleGenre } from "../../redux/actions/genreAction"

function BookSingle() {
    const{id} = useParams()
    const book = useSelector((state) => state.bookRdcr.book)
    const genre = useSelector((state) => state.genreRdcr.genre)
    const dispatch = useDispatch()
    const [fadeIn, setFadeIn] = useState(false);
    const bookDetailsRef = useRef(null);


    useEffect(() => {

        const fetchData = async() => {

            try {

                await dispatch(SingleBook(id))

                if(book && book.bookGenre) {
                  await dispatch(SingleGenre(book.bookGenre))
                }
                
            } catch (error) {
                console.error("there was a problem")
            }
    
    

        }

        fetchData()

       
    }, [dispatch, id, book])


    useEffect(() => {
        setFadeIn(true);
      }, []);


      if(!book || book === undefined || book === null || !genre || genre === undefined || genre === null) {
        return(<>
        <h6 className="text-center" style={{marginTop: "2 rem"}}>book is loading</h6>
        
        </>)
      }


      

    return(<>
    <div
            className={`book-details ${fadeIn ? "fade-in" : ""}`}
            ref={bookDetailsRef}

            style={{ marginTop: "3rem", textAlign: "center", fontFamily: "Helvetica" }}
          >
            <h2>{book.bookTitle}</h2>
            <img src={book.bookImage} alt="Book Cover" style={{width: "100%", height: "30vh", objectFit: "contain"}} />
            <h3>
              {book.bookAuthor}
            </h3>

            <p>
             Genre: {genre.genreName}
            </p>
            
            
            <p>Description: {book.bookDescription}</p>
            <p>Released On: {moment(book.bookReleaseDate).format("MMM D YYYY")}</p>
            <p> <a href={`${book.bookFile}`} target="_blank" rel="noopener noreferrer">read book </a> </p>
    
            
          </div> 

    
    
    </>)
}

export default BookSingle