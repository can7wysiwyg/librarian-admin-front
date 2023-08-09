import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalState } from "../../GlobalState"
import "../styles/showauthor.css"

function ShowAuthor() {
    const {id} = useParams()
   const state = useContext(GlobalState)
   const[authors] = state.authorsApi.authors
   const[newAuthor, setNewAuthor] = useState({})
    

   useEffect(() => {
    if(id) {
        authors.forEach((author) => {
            if(author.authorName === id) setNewAuthor(author)
        })
    }

   }, [id, authors])
    
   
    
    return(<>

<div className="container d-flex justify-content-center align-items-center ">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{newAuthor.authorName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{newAuthor.authorCountry}</h6>
          <p className="card-text">{newAuthor.authorShortBio}</p>
          <a href="/" className="card-link">Linkq</a>
          <a href={`/author_books/${newAuthor.authorName}`} className="card-link">Author's Books</a>
        </div>
      </div>
    </div>

    
    
    </>)
}

export default ShowAuthor