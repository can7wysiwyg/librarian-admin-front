import { useContext, useEffect, useState } from "react"
import { GlobalState } from "../../GlobalState"
import axios from "axios"
import { Card } from "react-bootstrap"

function ManageLibrarian() {
   const state = useContext(GlobalState)
   const supertoken = state.supertoken
   const[librarians, setLibrarian] = useState([])


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



 

    return(<>
        <div className="d-flex justify-content-center align-items-center vh-50">
            {
                librarians?.map((librarian) => (
                    <ShowCredentials key={librarian._id} librarian={librarian} />
                ))
            }
      
    </div>
    
    
    </>)
}


const ShowCredentials = ({librarian}) => {

    return(<>

<Card>

<Card.Body>
  <Card.Title>LOGIN CREDENTIALS</Card.Title>
  <Card.Text >email: {librarian.email}</Card.Text>
  <Card.Text >unique name: {librarian.uniqueName}</Card.Text> 
   <Card.Link href={`/change_password/${librarian._id}`}>change password</Card.Link>
   <Card.Text><a href={`/show_my_admin/${librarian.uniqueName}`}>view admin</a></Card.Text>
   <Card.Text> <a href="/change_admin_status"> admin account status </a>  </Card.Text>
</Card.Body>
</Card>
    
    
    
    </>)
}

export default ManageLibrarian