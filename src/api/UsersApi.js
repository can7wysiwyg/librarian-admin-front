import axios from "axios"
import { useEffect, useState } from "react"

function UsersApi() {
    const[users, setUsers] = useState([])

    useEffect(() => {

        const getUsers = async() => {

            const res = await axios.get('/userroute/show_users')

            setUsers(res.data.users)


        }

        getUsers()


    }, [])

    return{

        users: [users, setUsers]

    }
}

export default UsersApi