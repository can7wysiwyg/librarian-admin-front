import axios from "axios";
import { useEffect, useState } from "react"

function LibrarianInfo() {
    const[information, setInformation] = useState([])
    let items;

    useEffect(() => {

        const getInfo = async() => {
           
            const res = await axios.get('/admin/view_librarian')

            setInformation(res.data.result)

        }

        getInfo()

    }, [])

    if(information.length === 0) {
        return(<>
        
        <h1 className="text-center"> nothing as of yet</h1>
        </>)
    }

information?.map((showSingles) => (
    items = showSingles
))




    return(<>
    <div className="container d-flex justify-content-center align-items-center ">
      <div className="card">
        <div className="card-body">
        <img className="card-img-top" src={items.librarianImage} alt={items.fullname} />

          <h5 className="card-title">{items.fullname}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{items.personalEmail}</h6>
          <p className="card-text">
             {items.phoneNumber}
            
            </p>
            <p className="card-text">
             {items.home}
            
            </p>

            <p className="card-text">
             {items.gender}
            
            </p>

        </div>
      </div>
    </div>
 

    
    
    
    </>)
}

export default LibrarianInfo