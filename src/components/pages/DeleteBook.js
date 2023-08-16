import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalState } from "../../GlobalState"
import { Button,  Modal } from "react-bootstrap"
import axios from "axios"

function DeleteBook() {
    const{id} = useParams()
  const state =  useContext(GlobalState)
  const token = state.token
  const[books] = state.booksApi.books
  const[authors] = state.authorsApi.authors
  const[title, setTitle] = useState({})
  const[owner, setOwner] = useState({})
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  

useEffect(() => {

    if(id) {
        books.forEach((book) => {
            if(book._id === id) setTitle(book)
        })
    }


}, [id, books])


useEffect(() => {
    if(title.bookAuthor) {

        authors.forEach((author) => {
            if(author._id === title.bookAuthor) setOwner(author)
        })

    }

}, [title.bookAuthor, authors])


const deleteAll = async(event) => {
    event.preventDefault()

    const res = await axios.delete(`/books/delete_book/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    alert(res.data.msg)

    window.location.href = `/author_books/${title.bookAuthor}`
}
    return(<>
    <div className="text-center" style={{marginBottom: "4rem"}}>

<h4>you are about to delete <span style={{color: "red"}}> {title.bookTitle} </span> by  <span style={{color: "red"}}> {owner.authorName}</span> </h4>

<div style={{marginTop: "4rem", marginBottom: "5rem"}}>
<Button variant="danger" onClick={() => setShowModal(true)} style={{marginRight: "1.5rem"}}>delete book</Button>

</div>





</div>

<Modal show={showModal} onHide={handleModalClose}>
<Modal.Header closeButton>
  <Modal.Title>Confirm  Deletion.. Are You Sure?</Modal.Title>
</Modal.Header>
<Modal.Body>
    <div style={{textAlign: "center"}}>
    <Button variant="warning" type="submit" onClick={deleteAll}>delete book </Button>
    
</div>

</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleModalClose}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>

    
    
    </>)
}

export default DeleteBook