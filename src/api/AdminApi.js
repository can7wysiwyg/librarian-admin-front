import axios from "axios";
import {useEffect, useState} from "react"


function AdminApi() {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [onPending, setOnPending] = useState(false)
    const [onSuspension, seOnSuspension] = useState(false)


    let token = JSON.parse(JSON.stringify(localStorage.getItem('token')))
useEffect(() => {

    if(token) {

        const getAdmin = async() => {

      const res = await axios.get('/admin/user', {
        headers: {
            Authorization: `Bearer ${token}`
        }
      } )


      setIsLogged(true)

      res.data.admin === 0 && res.data.accountStatus === true ? setOnPending(true) : setOnPending(false)
      res.data.admin === 1 && res.data.accountStatus === false ? seOnSuspension(true) : seOnSuspension(false)
      res.data.admin === 1 && res.data.accountStatus === true ? setIsAdmin(true) : setIsAdmin(false)

        }
    
        getAdmin()
    
  

    }



}, [token])
    
return{
    isLogged: [isLogged, setIsLogged],
    isAdmin: [isAdmin, setIsAdmin],
    onPending: [onPending, setOnPending],
    onSuspension: [onSuspension, seOnSuspension]
}


    
}

export default AdminApi