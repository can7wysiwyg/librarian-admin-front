import { useContext, useEffect, useState } from "react"
import { Table  } from 'react-bootstrap';
import { GlobalState } from "../../GlobalState"
import axios from "axios"

function Borrowers() {
   const state = useContext(GlobalState)
   const token = state.token
   const[books, setBooks] = useState([])
   
   
   useEffect(() => {

    const getBorrowedBooks = async() => {

        const res = await axios.get(`/card/admin_view_borrowed_books`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        setBooks(res.data.borrowedBooks)

    }

    getBorrowedBooks()

    



   }, [token])

   if(books.length === 0) {
    return(<>
    
    <h1 className="text-center">as users load</h1>
    </>)
   }

   


    return(<>
    {

        books?.map((bookBorrower) => (
            <ListUsers key={bookBorrower._id} bookBorrower={bookBorrower.Borrower} />
        ))

    }
    
    
    </>)
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
        })
    }


    </tbody>
    </Table>

    

    </>)
}




export default Borrowers