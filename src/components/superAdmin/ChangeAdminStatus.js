import { useContext, useEffect, useState } from "react"
import { GlobalState } from "../../GlobalState"
import axios from "axios"


function ChangeAdminStatus() {
    const state = useContext(GlobalState)
    const supertoken = state.supertoken
    const[librarians, setLibrarian] = useState([])

    let items;


    useEffect(() => {
   
       const getAdmins = async() => {
   
           const res = await axios.get('/admin/show_to_main', {
               headers: {
                   Authorization: `Bearer ${supertoken}`
               }
           })
   
           setLibrarian(res.data.result)
   
       }
   
       getAdmins()
   
    }, [supertoken])
   
    
   
    if(librarians.length === 0) {
       return(<>
       
       <h1 className="text-center">nothing as of yet.. prolly loading</h1>
       </>)
    }


    librarians?.map((librarian) => (
        items = librarian
    ))
   
// console.log(items.accountStatus);

    return(<>
     <div className="container">
      <h1>What would you like to update?</h1>
      <div style={{marginTop: "2rem", marginBottom: "2rem"}}>
<h3>admin status: {items.admin}</h3>
{/* <h3>account status: {items.accountStatus}</h3> */}

      </div>
      <ul className="list-group">
        <li className="list-group-item">
          <a href={`/admin_status/${items._id}`}>Admin Status</a>
        </li>

        <li className="list-group-item">
          <a href={`/account_status/${items._id}`}>Account Status</a>
        </li>
        </ul>
        </div>
    
    
    </>)
}

export default ChangeAdminStatus