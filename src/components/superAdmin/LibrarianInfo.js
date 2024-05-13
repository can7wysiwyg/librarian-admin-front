import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { ViewLibrarian } from "../../redux/actions/mainAdminTasksAction";



function LibrarianInfo() {
    
    const dispatch = useDispatch()
    const result = useSelector((state) => state.tasksRdcr.result)

    let items;

    useEffect(() => {

        const getInfo = async() => {

            try {

                await dispatch(ViewLibrarian())
                
            } catch (error) {
                console.error("there was a problem")
            }
           
            
        }

        getInfo()

    }, [dispatch])

    if(!result || result === undefined || result === null) {
        return(<>
        
        <h6 className="text-center" style={{marginTop: "2rem"}}>information is loading</h6>
        </>)
    }

    if(result.length === 0) {
        return(<>
        
        <h1 className="text-center" style={{marginTop: "2rem"}}> nothing as of yet</h1>
        </>)
    }

result?.map((showSingles) => (
    items = showSingles
))




    return(<>

    
    </>)
}

export default LibrarianInfo