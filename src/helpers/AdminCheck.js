import { useState } from "react"
import { useDispatch } from "react-redux"

import { mainAdminGet } from "../redux/actions/mainAdminAction"
import { librarianAdminGet } from "../redux/actions/librarianAdminAction"

export function AdminCheck() {
const[librarianAdmin, setLibrarianAdmin] = useState({})
const[mainAdmin, setMainAdmin] = useState({})

const dispatch = useDispatch()


useDispatch(() => {

const fetchData = async() => {
    
     const responseLibrarian =  await dispatch(librarianAdminGet)
     const responseMainAdmin = await dispatch(mainAdminGet())
     setLibrarianAdmin(responseLibrarian)
     setMainAdmin(responseMainAdmin)



}   


fetchData()



}, [dispatch])


const AuthInfo = () => {

    if(librarianAdmin.admin === 1) {

        return (<>
         <a className="nav-link" href="/librarian">LIBRARIAN</a>
        
        </>)

    }


} 
if(mainAdmin.super === 18) {
    return(<>
     <a className="nav-link" href="/mainadmin">ADMIN</a>
    
    </>)
}

return(<>
{ AuthInfo() }

</>)

    
}