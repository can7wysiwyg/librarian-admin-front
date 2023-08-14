import { useLocation } from "react-router-dom"

function AuthorMore() {
    const location = useLocation()

    
    return(<div className="text-center" style={{fontFamily: "Times New Roman", fontStyle: "italic", marginTop: "4rem"}}>

<p>{location.state}</p>
    
    </div>)
}

export default AuthorMore