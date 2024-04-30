import { useDispatch, useSelector } from "react-redux"
import { mainAdminGet } from "../redux/actions/mainAdminAction"
import { librarianAdminGet } from "../redux/actions/librarianAdminAction"
import { useEffect } from "react"

export function AdminCheck() {



const dispatch = useDispatch()
const mainadmin = useSelector((state) => state.mainadminRdcr.mainadmin)
const librarian = useSelector((state) => state.librarianRdcr.librarian)

useEffect(() => {

const fetchData = async() => {
    try {
        await dispatch(librarianAdminGet())
        await dispatch(mainAdminGet())

      
        
        
        
    } catch (error) {
        console.error(error)
    }
      


}   


fetchData()



}, [dispatch])


const AuthInfo = () => {

    if(librarian?.admin === 1) {

        return (<>
         <a className="nav-link" href="/librarian">LIBRARIAN</a>
        
        </>)

    }

    if(mainadmin?.super === 18) {
        return(<>
         <a className="nav-link" href="/mainadmin">ADMIN</a>
        
        </>)
    }
    


} 

return(<>
{ AuthInfo() }

</>)

    
}