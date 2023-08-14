import { useContext,  useEffect,  useState } from "react"
import { GlobalState } from "../../GlobalState"
import { Table, Button, OverlayTrigger, Tooltip, Modal, Form } from 'react-bootstrap';
import axios from "axios";


function ManageBooks() {
  const state =  useContext(GlobalState)
  const[books] = state.booksApi.books
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  
  const filteredBooks = books.filter((book) =>
    book.bookTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination calculations
  const booksPerPage = 5;
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };




  
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
           
           <AuthorNames bookWriter={book.bookAuthor} />
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
    const state =  useContext(GlobalState)
  const token = state.token

    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => {
      setShowModal(false);
    };
  
    const handleEdit = () => {
      
      setShowModal(false);
    };

    const handleDelete = async(event) => {

        event.preventDefault()

        const res = await axios.delete(`/books/delete_book/${book._id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        alert(res.data.msg)

        window.location.href = "/manage_books"


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
                  <a href={`/book_update_picture/${book._id}`}>update book pdf</a>
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

const AuthorNames = ({ bookWriter }) => {
  const state = useContext(GlobalState);
  const [authors] = state.authorsApi.authors;
  const [writers, setWriters] = useState(""); 

  useEffect(() => {
    if (bookWriter) {
      const authorFound = authors.find((author) => author._id === bookWriter);
      if (authorFound) {
        setWriters(authorFound);
      }
    }
  }, [bookWriter, authors]);



  return (
    <>
      {writers.authorName}
    </>
  );
};





export default ManageBooks