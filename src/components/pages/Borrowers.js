import { useContext, useEffect, useState } from "react"
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

    return(<>
    
    {
        results?.map((result) => {
            return <div key={result._id}>
 <p>{result.fullname}</p>
            
            </div>
        })
    }
    </>)
}

export default Borrowers