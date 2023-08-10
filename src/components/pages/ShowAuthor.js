import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalState } from "../../GlobalState"
import { Button,  Modal } from 'react-bootstrap';
import "../styles/showauthor.css"


function ShowAuthor() {
    const {id} = useParams()
   const state = useContext(GlobalState)
   const[authors] = state.authorsApi.authors
   const[newAuthor, setNewAuthor] = useState({})
   const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => {
      setShowModal(false);
    };
  
    
    

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
        <img className="card-img-top" src={newAuthor.authorImage} alt={newAuthor.authorName} />

          <h5 className="card-title">{newAuthor.authorName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{newAuthor.authorCountry}</h6>
          <p className="card-text">{newAuthor.authorShortBio}</p>
          <button  className="btn btn-warning" onClick={() => setShowModal(true)} style={{marginRight: "1.5rem"}}>EDIT</button>
          <a href={`/author_books/${newAuthor.authorName}`} className="card-link">AUTHOR'S BOOKS</a>
        </div>
      </div>
    </div>
 
    <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Author</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Edit author's info:</p>
              <ul>
                <li>
                  <a href={`/update_list/${newAuthor._id}`}>update author info</a>
                </li>
              
                <li>
                  <a href={`/author_update_picture/${newAuthor._id}`}>update author picture</a>
                </li>
                
                <li>
                  <a href={`/delete_author_books/${newAuthor._id}`}>delete author books</a>
                </li>
                <li>
                  <a href={`/delete_author_profile/${newAuthor._id}`}>delete author</a>
                </li>
              </ul>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>

    
    
    </>)
}

export default ShowAuthor