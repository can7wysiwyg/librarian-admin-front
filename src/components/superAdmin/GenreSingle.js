import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { SingleGenre } from "../../redux/actions/genreAction"

function GenreSingle() {

   const {id} = useParams()

   const genre = useSelector((state) => state.genreRdcr)
   const dispatch = useDispatch()


   useEffect(() => {

    const fetchData = async()  => {

        try {

            await dispatch(SingleGenre(id))
            
        } catch (error) {
            console.error()
        }


    }

    fetchData()


   }, [dispatch, id])

   if(!genre) {
    
    return(<>
    <h6 className="text-center" style={{marginTop: "2rem"}}>item is loading..</h6>
    
    </>)

}


    return(<>
    <div className="book-details" style={{ marginTop: "4rem", textAlign: "center", fontFamily: "Helvetica" }}>
       
       <div className="text-center">

          <h1 style={{color: "red"}}>{genre.genre.genreName}</h1>

          <div style={{marginTop: "1.5rem"}}>

            <h5>manage genre</h5>

            <h6><a href={`/books_in_this_genre/${genre.genre._id}`}> view books in this genre category </a></h6>


          </div>
       </div>

      


    </div>
    
    
    </>)
}

export default GenreSingle