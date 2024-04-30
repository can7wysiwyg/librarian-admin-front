import { logoutAdmin } from "./Logout"
import {supertoken, librarianToken} from "./AdminsTokens"

export function AuthComp() {
  const checkAuth = () => {
    

    
    if (supertoken === null && librarianToken === null) {
      return (
        <>
          <a className="nav-link" href="/login_panel">LOGIN</a>
        </>
      );
    }

    
    return (
      <>
        <a href="#c" className="nav-link" style={{ cursor: "pointer" }} onClick={logoutAdmin}>
          LOGOUT
        </a>
      </>
    );
  }

  return (
    <>
      {checkAuth()}
    </>
  );
}
