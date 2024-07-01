import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getGenres } from "../../redux/actions/genreAction"

function CreateSubGenres() {
    const genres = useSelector((state) => state.genreRdcr.genres)

    const dispatch = useDispatch()


    useEffect(() => {

        const fetchGenres = async() => {

            try {

                await dispatch(getGenres())
                
            } catch (error) {
                console.error("there was a problem")
            }


        }

        fetchGenres()


    }, [dispatch])



    if(!genres) {
        return(<>
        <h5 className="text-center" style={{marginTop: "3rem"}}>genres are loading</h5>
        </>)
    }

    if(genres && genres.length === 0) {
        return(<>
        <h5 className="text-center" style={{marginTop: "3rem"}}>there are no main genres! therefore, you cannot create subgenres</h5>
        </>)
    }




    return(<>

<div className=" text-center" style={{ marginTop: "2rem" }}>
<ol className="list-group list-group-numbered">

    {
        Array.isArray(genres) ? genres?.map((genre) => (

            <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              
              <p><a href={`/create_sub/${genre._id}`}>{genre.genreName}</a></p>
            </div>
          </li>





        )) : "THERE WAS A PROBLEM"
    }



    </ol>
    </div>



    
    
    </>)

}

export default CreateSubGenres