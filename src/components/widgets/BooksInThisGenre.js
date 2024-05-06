import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { BookAccGenre, BookDelete } from "../../redux/actions/bookAction"
import { Table, Button, OverlayTrigger, Tooltip, Modal, Form } from 'react-bootstrap';


function BooksInThisGenre() {
    const {id} = useParams()
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
  
     const bookGen = useSelector((state) => state.bookRdcr.bookGen)
     const dispatch = useDispatch()

     useEffect(() => {

        const fetchData = async() => {

            try {

                await dispatch(BookAccGenre(id))
                
            } catch (error) {
                console.error("there was a problem")
            }


        }

        fetchData()



     }, [dispatch, id])

     if(!bookGen) {

        return(<>
        <h6 className="text-center" style={{marginTop: "2rem"}}>data is loading</h6>
        </>)
     } 
     
     
     const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); // Reset to the first page when searching
      };
    
      
      const filteredBooks = bookGen?.filter((book) =>
        book.bookTitle.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
      // Pagination calculations
      const booksPerPage = 5;
      const indexOfLastBook = currentPage * booksPerPage;
      const indexOfFirstBook = indexOfLastBook - booksPerPage;
      const currentBooks = filteredBooks?.slice(indexOfFirstBook, indexOfLastBook);
    
      // Change page
      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };
    
    
  
  
  
     
     
     
     
     
     
     
     
     if(bookGen && bookGen.length === 0) {

        return(<>

<h6 className="text-center" style={{marginTop: "2rem"}}>there are no books in this genre</h6>
        
        
        </>)

     }


    

    return(<>
    <div style={{margin: "2rem"}}>
      <Form.Group >
        <Form.Control
          type="text"
          placeholder="Search by title"
          value={searchQuery}
          onChange={handleSearch}
        />
      </Form.Group>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentBooks.map((book) => (
            <tr key={book._id}>
              <td>
                <img src={book.bookImage} alt={book.bookTitle} style={{ width: '50px' }} />
              </td>
              <td> <a href={`/book_single/${book._id}`}> {book.bookTitle} </a></td>
              <td>
           
         {book.bookAuthor} 
              </td>
              <td>
                <Buttons book={book} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      <nav>
        <ul className="pagination">
          {Array.from({ length: Math.ceil(filteredBooks.length / booksPerPage) }).map((_, index) => (
            <li
              key={index}
              className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => handlePageChange(index + 1)}
            >
              <span className="page-link">{index + 1}</span>
            </li>
          ))}
        </ul>
      </nav>



    
    
    </>)
}


const Buttons = ({book}) => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch()

    const handleModalClose = () => {
      setShowModal(false);
    };
  
    const handleEdit = () => {
      
      setShowModal(false);
    };

    const handleDelete = async(event) => {

        event.preventDefault()

        await dispatch(BookDelete(book._id))

        
    }

    const deleteButtonTooltip = <Tooltip id="delete-tooltip">Delete</Tooltip>;

  

    return(<>

<Button variant="primary" size="md" className="mr-2 mb-2 mb-md-0" onClick={() => setShowModal(true)} style={{marginRight: "1.5rem"}}>
  Edit
</Button>

<OverlayTrigger placement="top" overlay={deleteButtonTooltip}>
  <Button variant="danger" size="md" onClick={handleDelete}>
    Delete
  </Button>
</OverlayTrigger>



      {/* Modal */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Edit the book's info:</p>
              <ul>
                <li>
                  <a href={`/update_list/${book._id}`}>update book info</a>
                </li>
              
                <li>
                  <a href={`/book_update_picture/${book._id}`}>update book picture</a>
                </li>
                <li>
                  <a href={`/book_update_pdf/${book._id}`}>update book pdf</a>
                </li>
              </ul>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </>)
}



export default BooksInThisGenre