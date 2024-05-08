import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { SingleGenre } from "../../redux/actions/genreAction"
import { BooksShow } from "../../redux/actions/bookAction"

function GenreSingle() {

   const {id} = useParams()
   const[items, setItems] = useState({})
   const genre = useSelector((state) => state.genreRdcr.genre)
   const books = useSelector((state) => state.bookRdcr.books)
   const dispatch = useDispatch()



   useEffect(() => {

    const fetchData = async()  => {

        try {

            await dispatch(SingleGenre(id))
            await dispatch(BooksShow())

            
        } catch (error) {
            console.error()
        }


    }

    fetchData()


   }, [dispatch, id])



   useEffect(() => {

    const fetchData = async() => {

        if(genre && genre._id) {

            const res = books?.find((book) => book.bookGenre === genre._id)

            setItems(res);

        }
    }
fetchData()

   }, [dispatch, books, genre])

   if(!genre || genre === undefined || genre === null) {
    
    return(<>
    <h6 className="text-center" style={{marginTop: "2rem"}}>item is loading..</h6>
    
    </>)

}




    return(<>
    <div className="book-details" style={{ marginTop: "4rem", textAlign: "center", fontFamily: "Helvetica" }}>
       
       <div className="text-center">

          <h1 style={{color: "red"}}>{genre.genreName}</h1>

          <div style={{marginTop: "1.5rem"}}>

            {
                items?.bookGenre === genre._id ?  "" : <h5><a href={`/delete_genre/${genre._id}`}>delete genre</a> </h5>
            }


<h5> <a href={`/edit_genre/${genre._id}`} style={{textDecoration: "none"}}>edit genre</a></h5>

            

            <h6><a href={`/books_in_this_genre/${genre._id}`}> view books in this genre category </a></h6>


          </div>
       </div>

      


    </div>
    
    
    </>)
}

export default GenreSingle