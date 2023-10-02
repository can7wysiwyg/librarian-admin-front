import { useContext, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { GlobalState } from "../../GlobalState"
import { Button,  Modal } from 'react-bootstrap';
// import "../styles/showauthor.css"


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
            if(author._id === id) setNewAuthor(author)
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
          <p className="card-text">
            
            
            <AuthorBio newAuthor={newAuthor} />
            </p>
          <button  className="btn btn-warning" onClick={() => setShowModal(true)} style={{marginRight: "2rem"}}>EDIT</button>
         
          <a href={`/author_books/${newAuthor._id}`} className="card-link">AUTHOR'S BOOKS</a>
          
        </div>
      </div>
    </div>
 
    <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Author Actions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Take Actions</p>
              <ul>
                <li>

                <a href={`/upload_books/${newAuthor._id}`}>upload book</a>
                </li>
                <li>
                  <a href={`/update_bio/${newAuthor._id}`}>update author bio</a>
                </li>
                <li>
                  <a href={`/update_name/${newAuthor._id}`}>update author name</a>
                </li>
                <li>
                  <a href={`/update_country/${newAuthor._id}`}>update author country</a>
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


const AuthorBio = ({newAuthor}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate()
  
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };


    let {authorShortBio} = newAuthor
     let maxChars = 90


     const redirecto = () => {
      navigate(`/author_more/${newAuthor._id}`, { state: authorShortBio });


     }

      

     

  return(<>

{isExpanded ? authorShortBio : authorShortBio?.slice(0, maxChars)}
        { authorShortBio?.length > maxChars && (
          <span onClick={toggleExpansion}>
            {isExpanded ? `` : <p style={{color: "blue", cursor: "pointer"}} onClick={redirecto}>see more</p> }
          </span>
        )}

  
  
  
  </>)
}

export default ShowAuthor