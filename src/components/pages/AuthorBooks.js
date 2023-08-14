import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import moment from "moment/moment"
import { GlobalState } from "../../GlobalState"

function AuthorBooks() {
    const {id} =  useParams()
  const[results, setResults] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {

    const getBooks = async() => {

        const res = await axios.get(`/books/show_author_books/${id}`)

        setResults(res.data.books)

    }

    getBooks()



  }, [id])


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBooks = results.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(results.length / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



  
  

    return(<>

<div className="row" style={{ marginBottom: "2rem" }}>
        {currentBooks.map((book) => (
          <div className="col-md-4 mb-4" key={book._id}>
            <div className="card h-50 shadow-sm">
                <a className="text-center" href={`/show_author/${book.bookAuthor}`} > <AuthorName bookWriter={book.bookAuthor} /></a>
              <img
                src={book.bookImage}
                alt={book.bookTitle}
                className="card-img-top"
                style={{
                  width: "100%",
                  maxHeight: "30vh",
                  objectFit: "contain"
                }}
              />
              <div className="card-body">
                <a
                  href={`/book_single/${book._id}`}
                  className="card-title"
                  style={{ textDecoration: "none" }}
                >
                  {book.bookTitle}
                </a>

                <p> 
  
               <BookDescription book={book} />

                </p>
               
              </div>
              <div className="card-footer">

                <p>book was released on {moment(book.bookReleaseDate).format("MMM D YYYY")}</p>
                
              </div>
            </div>
          </div>
        ))}
      </div>


      <nav>
        <ul className="pagination">
          {pageNumbers.map((pageNumber) => (
            <li
              key={pageNumber}
              className={`page-item ${
                currentPage === pageNumber ? "active" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => changePage(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    
    
    </>)
}


const BookDescription = ({book}) => {

    const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };


    const {bookDescription} = book
  const maxChars = 90

  const shouldShowSeeMore = bookDescription.length > maxChars;


    return(<>

{isExpanded ? bookDescription : bookDescription.slice(0, maxChars)}
        {shouldShowSeeMore && (
          <span onClick={toggleExpansion}>
            {isExpanded ? `` : <a href={`/book_single/${book._id}`}>see more</a> }
          </span>
        )}

    
    
    </>)
}


const AuthorName = ({bookWriter}) => {
 const state = useContext(GlobalState)
  const [authors] = state.authorsApi.authors;
  const[item, setItem] = useState({})
  
  useEffect(() => {

    if(bookWriter) {
      authors.forEach((author) => {
        if(author._id === bookWriter) setItem(author)
      })
    }

  }, [bookWriter, authors])


  return(<>

  {
    item.authorName
  }
  
  
  
  </>)
}

export default AuthorBooks