import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalState } from "../../GlobalState"
import axios from "axios"
import moment from "moment/moment"


function UserBorrowedBooks() {
   const {id} = useParams()
  const state =  useContext(GlobalState)
  const token = state.token
const[item, setItems] = useState({})


  useEffect(() => {

    const getBorrowedBooks = async() => {
     
const res = await axios.get(`/card/show_user_borrowed_book/${id}`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
})

setItems(res.data.result)
     

    }

    getBorrowedBooks()


  }, [id, token])

  if(item === "" || item === undefined || item === null) {
    return(<>
    
    <p className="text-center">user has not borrowed books or due to slow network books are yet to load.. be PaTiEnT please</p>
    </>)
  }
  
   
    return(
    <>
    <p style={{margin: "1rem"}}> back to user <a href={`/show_user/${item.Borrower}`}>profile</a> </p>
    
    <div className="container text-center">

    <ShowBookOne BookOne={item.BookOne} />

    {item.BookTwo === "" ? "" : <ShowBookTwo BookTwo={item.BookTwo} /> }

    {item.BookThree === "" ? "" : <ShowBookThree BookThree={item.BookThree} /> }

    
    
    </div>
    </>
    )

    
}


const ShowBookOne = ({BookOne}) => {
    const state =  useContext(GlobalState)
    const [books] = state.booksApi.books
const[result, setResult] = useState({})

 
    useEffect(() => {

 if(BookOne) {

const item = books.find((book) => book._id === BookOne)
setResult(item)

 }


    }, [books, BookOne])
 let named = result.bookFile

    

    return(<>
     <div className="row justify-content-center" style={{marginTop: "2rem"}}>
    <div className="col-md-8">
            <div className="card mb-4">
              <img src={result.bookImage} alt={result.bookTitle} style={{width: "100%", maxHeight: "30vh", objectFit: "contain"}} />
              <div className="card-body text-center">
                <h5 className="card-title">{result.bookTitle}</h5>
                <p className="card-text">released on {moment(result.bookReleaseDate).format("MMM D YYYY")} </p>
                <h5 className="card-text text-primary" style={{cursor: "pointer"}}>
                   <a href={named} style={{textDecoration: "none"}} target="_blank" rel="noreferrer">
                     VIEW BOOK 
                     </a>
                     
                      </h5> 
                
                
                
             </div> 
             </div> 
           </div> 





     </div> 
     
    
    </>)


    


    }

    const ShowBookTwo = ({BookTwo}) => {
        const state =  useContext(GlobalState)
        const [books] = state.booksApi.books
    const[result, setResult] = useState({})
    
     
        useEffect(() => {
    
     if(BookTwo) {
    
    const item = books.find((book) => book._id === BookTwo)
    setResult(item)
    
     }
    
    
        }, [books, BookTwo])
     let named = result.bookFile
    
        
    
        return(<>
         <div className="row justify-content-center" style={{marginTop: "2rem"}}>
        <div className="col-md-8">
                <div className="card mb-4">
                  <img src={result.bookImage} alt={result.bookTitle} style={{width: "100%", maxHeight: "30vh", objectFit: "contain"}} />
                  <div className="card-body text-center">
                    <h5 className="card-title">{result.bookTitle}</h5>
                    <p className="card-text">released on {moment(result.bookReleaseDate).format("MMM D YYYY")} </p>
                    <h5 className="card-text text-primary" style={{cursor: "pointer"}}>
                       <a href={named} style={{textDecoration: "none"}} target="_blank" rel="noreferrer">
                         VIEW BOOK 
                         </a>
                         
                          </h5> 
                    
                    
                    
                 </div> 
                 </div> 
               </div> 
    
    
    
    
    
         </div> 
         
        
        </>)
    
    
        
    
    
        }


        const ShowBookThree = ({BookThree}) => {
            const state =  useContext(GlobalState)
            const [books] = state.booksApi.books
        const[result, setResult] = useState({})
        
         
            useEffect(() => {
        
         if(BookThree) {
        
        const item = books.find((book) => book._id === BookThree)
        setResult(item)
        
         }
        
        
            }, [books, BookThree])
         let named = result.bookFile
        
            
        
            return(<>
             <div className="row justify-content-center" style={{marginTop: "2rem"}}>
            <div className="col-md-8">
                    <div className="card mb-4">
                      <img src={result.bookImage} alt={result.bookTitle} style={{width: "100%", maxHeight: "30vh", objectFit: "contain"}} />
                      <div className="card-body text-center">
                        <h5 className="card-title">{result.bookTitle}</h5>
                        <p className="card-text">released on {moment(result.bookReleaseDate).format("MMM D YYYY")} </p>
                        <h5 className="card-text text-primary" style={{cursor: "pointer"}}>
                           <a href={named} style={{textDecoration: "none"}} target="_blank" rel="noreferrer">
                             VIEW BOOK 
                             </a>
                             
                              </h5> 
                        
                        
                        
                     </div> 
                     </div> 
                   </div> 
        
        
        
        
        
             </div> 
             
            
            </>)
        
        
            
        
        
            }
         



export default UserBorrowedBooks