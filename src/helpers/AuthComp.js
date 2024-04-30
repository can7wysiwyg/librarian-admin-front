import { logoutAdmin } from "./Logout"
import {supertoken, librarianToken} from "./AdminsTokens"

export function AuthComp() {
    
    return(<>
   { supertoken || librarianToken  === null  ? <a className="nav-link" href="/login">LOGIN </a>
        

    :  <a href="#c" className="nav-link" style={{cursor: "pointer"}} onClick={logoutAdmin} >
      LOGOUT
    </a>

}
        
    </>)
}