import { useContext, useEffect, useState } from "react"
import { Table  } from 'react-bootstrap';
import { GlobalState } from "../../GlobalState"
import axios from "axios"


function Borrowers() {
    const state = useContext(GlobalState);
    const token = state.token;
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
  
    useEffect(() => {
      const getBorrowedBooks = async () => {
        const res = await axios.get(`/card/admin_view_borrowed_books`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        setBooks(res.data.borrowedBooks);
      };
  
      getBorrowedBooks();
    }, [token]);
  
    const usersPerPage = 7;
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = books.slice(indexOfFirstUser, indexOfLastUser);
  
    // Change page
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    if (books.length === 0) {
      return (
        <>
          <h1 className="text-center">Loading...</h1>
        </>
      );
    }
  
    return (
      <>
        {currentUsers.map((bookBorrower) => (
          <ListUsers key={bookBorrower._id} bookBorrower={bookBorrower.Borrower} />
        ))}
  
        {/* Pagination */}
        <nav>
          <ul className="pagination">
            {Array.from({ length: Math.ceil(books.length / usersPerPage) }).map((_, index) => (
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
      </>
    );
  }
  


const ListUsers = ({bookBorrower}) => {
    const state = useContext(GlobalState)
   const[users] = state.usersApi.users
   const[results, setResults] = useState({})
   


   useEffect(() => {

    let showSum = users?.filter((user) => user._id === bookBorrower)

    setResults(showSum)

   }, [users, bookBorrower])

   
   

   
   if(users.length === 0) {
    return ""
}

if(results === "" || results === null) {
    return ""
}


    return(<>

<Table striped bordered hover>
        <thead>
          <tr>
            <th>IMAGE</th>
            <th>NAME</th>
            <th>VIEW BORROWED BOOKS</th>
            
            
          </tr>
        </thead>
        <tbody>
    
    {  

    Array.isArray(results) ? 
        results?.map((result) => {
            return <tr key={result._id}>
            <td>
              <img src={result.userImage} alt={result.fullname} style={{ width: '50px' }} />
            </td>
            <td> <a href={`/show_user/${result._id}`}> {result.fullname} </a> </td>
                       <td>
         
        <a href={`/see_borrowed_books/${result._id}`}>CLICK TO VIEW</a> 
        

            </td>
            
          </tr>
        }) : null
    }


    </tbody>
    </Table>

    

    </>)
}




export default Borrowers