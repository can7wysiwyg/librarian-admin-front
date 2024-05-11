import axios from "axios";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { ViewLibrarian } from "../../redux/actions/mainAdminTasksAction";

function LibrarianAuthInfo() {
    
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

    }, [])

    if(result.length === 0) {
        return(<>
        
        <h1 className="text-center" style={{marginTop: "2rem"}}> nothing as of yet</h1>
        </>)
    }

information?.map((showSingles) => (
    items = showSingles
))




    return(<>
    <div className="container d-flex justify-content-center align-items-center ">
      <div className="card">
        <div className="card-body">
        

          <h5 className="card-title">{items.uniqueName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{items.email}</h6>
          
            
            
        </div>
      </div>
    </div>
 

    
    
    
    </>)
}

export default LibrarianAuthInfo