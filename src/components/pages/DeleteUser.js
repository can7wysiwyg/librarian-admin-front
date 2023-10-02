import { useContext } from "react"
import { useParams } from "react-router-dom"
import { GlobalState } from "../../GlobalState"
import axios from "axios"

function DeleteUser() {
   const {id} = useParams()
   const state = useContext(GlobalState)
   const token = state.token



    const deleteUser = async(event) => {
        event.preventDefault()
           
        const res = await axios.delete(`/admin/delete_member/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        alert(res.data.msg)
        window.location.href = "/users"

    }

    return(<div className="container text-center">

        <p>are you sure, you wanna delete this user???</p>

        <div style={{margin: "2rem"}}>
            <form onSubmit={deleteUser}>

            <button className="btn btn-warning" type="submit">DELETE USER</button>
            </form>


        </div>

    
    
    </div>)
}

export default DeleteUser