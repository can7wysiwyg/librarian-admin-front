import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { EradicateGenre } from "../../redux/actions/genreAction"

function EraseGenre() {
    const {id} = useParams()
    const dispatch = useDispatch()

    const handleDelete = async(event) => {
event.preventDefault()

await dispatch(EradicateGenre(id))

    }



    return(<>
     <div className="book-details" style={{ marginTop: "4rem", textAlign: "center", fontFamily: "Helvetica" }}>
                   <p>are you sure that you want to delete this genre?</p>
                   <br />
                   <button className="btn btn-danger" onClick={handleDelete}>delete genre</button>

   </div>
    
    
    </>)

}


export default EraseGenre