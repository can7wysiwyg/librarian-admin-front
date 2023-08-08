import axios from "axios"
import { useEffect, useState } from "react"

function SuperAdminApi() {
    const[isSuperLogged, setIsSuperLogged] = useState(false)
    const[isSuperAdmin, setIsSuperAdmin] = useState(false)
    const[isSuperPending, setIsSuperPending] = useState(false)

    const supertoken = JSON.parse(JSON.stringify(localStorage.getItem('supertoken')))

    useEffect(() => {

        if(supertoken) {

        const getSuperAdmin = async() => {

            const res = await axios.get('/mainadmin/user', {
                headers: {
                    Authorization: `Bearer ${supertoken}`
                }
            })


            setIsSuperLogged(true)
            res.data.super !==18 ? setIsSuperPending(true) : setIsSuperPending(false)
            res.data.super === 18 ? setIsSuperAdmin(true) : setIsSuperAdmin(false)

        }

        getSuperAdmin()


        }

    }, [supertoken])




    return{
        isSuperLogged: [isSuperLogged, setIsSuperLogged],
        isSuperAdmin: [isSuperAdmin, setIsSuperAdmin],
        isSuperPending: [isSuperPending, setIsSuperAdmin]

    }
}

export default SuperAdminApi