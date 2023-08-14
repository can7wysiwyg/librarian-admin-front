import { useLocation, useParams } from "react-router-dom"

function AuthorMore() {
    const{id} = useParams()
    const location = useLocation()

    
    return(<div className="text-center" style={{fontFamily: "Times New Roman", fontStyle: "italic", marginTop: "4rem"}}>

<p>{location.state}</p>
    
    </div>)
}

export default AuthorMore