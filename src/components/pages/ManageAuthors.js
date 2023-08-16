import { useContext, useState } from "react"
import { GlobalState } from "../../GlobalState"
import { Table, Form } from 'react-bootstrap';



function ManageAuthors() {
    const state = useContext(GlobalState)
   const[authors] = state.authorsApi.authors

   const [currentPage, setCurrentPage] = useState(1);
   const [searchQuery, setSearchQuery] = useState('');
 
   const handleSearch = (e) => {
     setSearchQuery(e.target.value);
     setCurrentPage(1); // Reset to the first page when searching
   };
 
   
   const filteredAuthors = authors.filter((author) =>
     author.authorName.toLowerCase().includes(searchQuery.toLowerCase())
   );
 
   // Pagination calculations
   const authorsPerPage = 5;
   const indexOfLastAuthor = currentPage * authorsPerPage;
   const indexOfFirstAuthor = indexOfLastAuthor - authorsPerPage;
   const currentAuthors = filteredAuthors.slice(indexOfFirstAuthor, indexOfLastAuthor);
 
   // Change page
   const handlePageChange = (pageNumber) => {
     setCurrentPage(pageNumber);
   };

   if(authors.length === 0) {
    return(<>
    <h1 style={{textAlign: "center"}}>there are no authors at the moment 😫😫</h1>
    
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
            <th>Author Name</th>
            <th>Author Country</th>
            <th>Author Books</th>
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
          {currentAuthors.map((author) => (
            <tr key={author._id}>
              <td>
                <img src={author.authorImage} alt={author.authorName} style={{ width: '50px' }} />
              </td>
              <td>  {author.authorName} </td>
              <td> {author.authorCountry} </td>
              <td> 
              <a href={`/author_books/${author._id}`} >author's books</a>

              </td>
              <td>
           
          <a href={`/show_author/${author._id}`}>manage user</a> 
          

              </td>
              
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      <nav>
        <ul className="pagination">
          {Array.from({ length: Math.ceil(filteredAuthors.length / authorsPerPage) }).map((_, index) => (
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

export default ManageAuthors