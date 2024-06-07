import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { userBorrowedBooks } from "../../redux/actions/usersAction"
import { BooksShow } from "../../redux/actions/bookAction"
import moment from "moment/moment"


function UserBorrowedBooks() {

   const {id} = useParams()
   const result = useSelector((state) => state.userRdcr.result)
   const dispatch = useDispatch()


   useEffect(() => {

    const fetchData = async() => {

        try {

            await dispatch(userBorrowedBooks(id))

            
        } catch (error) {
            console.error("there was a problem")
        }


    }

    fetchData()


   }, [dispatch, id])


   if(!result === "" || result === undefined || result === null) {
    return(<>
    
    <p className="text-center" style={{marginTop: "3rem"}}>data is loading</p>
    </>)
  }
  

  if(result.length === 0) {
    return(<>
    
    <p className="text-center" style={{marginTop: "3rem"}}>user has not borrowed any books</p>
    </>)
  }
  
    return(<>
    <div style={{margin: "1rem", fontFamily: "fantasy"}}>
    <p > back to user <a href={`/show_user/${result.Borrower}`}>profile</a> </p>
    </div>

    <div className="container text-center" style={{margin: "2rem", fontFamily: "Times New Roman"}}>

    <ShowBookOne BookOne={result.BookOne} />

    {result.BookTwo === "" ? "" : <ShowBookTwo BookTwo={result.BookTwo} /> }

    {result.BookThree === "" ? "" : <ShowBookThree BookThree={result.BookThree} /> }

    
    
    </div>

    
    
    </>)
}


const ShowBookOne = ({BookOne}) => {

    const books = useSelector((state) => state.bookRdcr.books)
    const[result, setResult] = useState({})
    const dispatch = useDispatch()


 
    useEffect(() => {

        const fetchBook = async() => {


            try {

                await dispatch(BooksShow())

                

                
                
            } catch (error) {
                console.error("there was a problem")
            }


        }

        fetchBook()



    }, [dispatch])

useEffect(() => {

  if(books && BookOne) {

    let showItem = books?.find((book) => book._id === BookOne )

    setResult(showItem)
     

  }



}, [books, BookOne])


    if( !books || !result || books === undefined || books === null || result === "") {
      return(<h1>as stuff loads</h1>)
     }
    

     


 let named = result.bookFile

    
    return(<>
     <div className="row justify-content-center" style={{marginTop: "2rem"}}>
    <div className="col-md-8">
            <div className="card mb-4">
              <img src={result.bookImage} alt={result.bookTitle} style={{width: "100%", maxHeight: "30vh", objectFit: "contain"}} />
              <div className="card-body text-center">
                <p className="card-title">{result.bookTitle}</p>
                <p className="card-text">released on {moment(result.bookReleaseDate).format("MMM D YYYY")} </p>
                 <p className="card-text text-primary" style={{cursor: "pointer"}}>
                   <a href={named} style={{textDecoration: "none"}} target="_blank" rel="noreferrer">
                     VIEW BOOK 
                     </a>
                     
                      </p> 
                
                 
                
             </div> 
             </div> 
           </div> 





     </div> 
     
    
    </>)


    


    }

    const ShowBookTwo = ({BookTwo}) => {
      const books = useSelector((state) => state.bookRdcr.books)
    const[result, setResult] = useState({})
    const dispatch = useDispatch()


 
    useEffect(() => {

        const fetchBook = async() => {


            try {

                await dispatch(BooksShow())
                

                
                
            } catch (error) {
                console.error("there was a problem")
            }


        }

        fetchBook()



    }, [dispatch])


    useEffect(() => {


      if( books && BookTwo) {

        let showItem = books?.find((book) => book._id === BookTwo )
  
        setResult(showItem)
         
  
      }
  



    }, [books, BookTwo])




    if( !books || !result || books === undefined || books === null || result === "") {
      return(<h1>as stuff loads</h1>)
     }
    
     


 let named = result.bookFile


        
    
        return(<>
         <div className="row justify-content-center" style={{marginTop: "2rem"}}>
        <div className="col-md-8">
                <div className="card mb-4">
                  <img src={result.bookImage} alt={result.bookTitle} style={{width: "100%", maxHeight: "30vh", objectFit: "contain"}} />
                  <div className="card-body text-center">
                    <p className="card-title">{result.bookTitle}</p>
                    <p className="card-text">released on {moment(result.bookReleaseDate).format("MMM D YYYY")} </p>
                    <p className="card-text text-primary" style={{cursor: "pointer"}}>
                       <a href={named} style={{textDecoration: "none"}} target="_blank" rel="noreferrer">
                         VIEW BOOK 
                         </a>
                         
                          </p> 
                    
                    
                    
                 </div> 
                 </div> 
               </div> 
    
    
    
    
    
         </div> 
         
        
        </>)
    
    
        
    
    
        }


        const ShowBookThree = ({BookThree}) => {

          const books = useSelector((state) => state.bookRdcr.books)
    const[result, setResult] = useState({})
    const dispatch = useDispatch()


 
    useEffect(() => {

        const fetchBook = async() => {


            try {

                await dispatch(BooksShow())

                
                
            
            

               
                
            } catch (error) {
                console.error("there was a problem")
            }


        }

        fetchBook()



    }, [dispatch])


useEffect(() => {

  if(books && BookThree) {

    let showItem = books?.find((book) => book._id === BookThree )

    setResult(showItem)
     

  }



}, [books, BookThree])


    if( !books || !result || books === undefined || books === null || result === "") {
      return(<h1>as stuff loads</h1>)
     }


     
 let named = result.bookFile

            
            
            
        
            return(<>
             <div className="row justify-content-center" style={{marginTop: "2rem"}}>
            <div className="col-md-8">
                    <div className="card mb-4">
                      <img src={result.bookImage} alt={result.bookTitle} style={{width: "100%", maxHeight: "30vh", objectFit: "contain"}} />
                      <div className="card-body text-center">
                        <p className="card-title">{result.bookTitle}</p>
                        <p className="card-text">released on {moment(result.bookReleaseDate).format("MMM D YYYY")} </p>
                        <p className="card-text text-primary" style={{cursor: "pointer"}}>
                           <a href={named} style={{textDecoration: "none"}} target="_blank" rel="noreferrer">
                             VIEW BOOK 
                             </a>
                             
                              </p> 
                        
                        
                        
                     </div> 
                     </div> 
                   </div> 
        
        
        
        
        
             </div> 
             
            
            </>)
        
        
            
        
        
            }





export default UserBorrowedBooks