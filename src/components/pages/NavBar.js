import React, { useContext } from 'react';
import "../styles/navbar.css"
import { GlobalState } from '../../GlobalState';

const Navbar = () => {
   const state = useContext(GlobalState)
   const[isLogged] = state.adminApi.isLogged
   const[isAdmin] = state.adminApi.isAdmin
   const[onPending] = state.adminApi.onPending
   const[onSuspension] = state.adminApi.onSuspension
   const[isSuperLogged] = state.superAdminApi.isSuperLogged
   const[isSuperAdmin] = state.superAdminApi.isSuperAdmin
  //  const[isSuperPending] = state.superAdminApi.isSuperPending
   


   const logoutSuperAdmin = () => {

    localStorage.removeItem("supertoken")
    window.location.href = "/"


   }


   const logoutAdmin = () => {
    localStorage.removeItem("token")
    window.location.href = "/"

   }




   const superRouter = () => {

    return(<>

      <nav>
              <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                  <li className='nav-item'>
                  <a className="nav-link pe-3 me-4 fw-bold active" aria-current="page" href="/make_admin" >
                        MAKE ADMIN
                      </a>
      
                  </li>
                  <li className='nav-item'>
                  <a className="nav-link pe-3 me-4 fw-bold active" aria-current="page" href="/librarian_info" >
                        VIEW LIBRARIAN INFO
                      </a>
      
                  </li>

                  <li className='nav-item'>
              <a className="nav-link pe-3 me-4 fw-bold active" aria-current="page" href="/" onClick={logoutSuperAdmin}>
                    LOGOUT
                  </a>
                  </li>
  
      
                  
              </ul>
      
          </nav>
          
          
          
          
          </>)
      


   }


   const adminRouter = () => {

    return(<>

<nav>
        <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
            <a className="nav-link pe-3 me-4 fw-bold active" aria-current="page" href="/users" >
                  USERS
                </a>

            </li>

            <li className='nav-item'>
            <a className="nav-link pe-3 me-4 fw-bold active" aria-current="page" href="/books_panel" >
                  BOOKS
                </a>

            </li>
            <li className='nav-item'>
            <a className="nav-link pe-3 me-4 fw-bold active" aria-current="page" href="/borrowers" >
                  BORROWERS
                </a>

            </li>


            <li className='nav-item'>
            <a className="nav-link pe-3 me-4 fw-bold active" aria-current="page" href="/authors" >
                  AUTHORS
                </a>

            </li>
            <li className='nav-item'>
            <a className="nav-link pe-3 me-4 fw-bold active" aria-current="page" href="/categories" >
                  CATEGORIES
                </a>

            </li>
            <li className='nav-item'>
            <a className="nav-link pe-3 me-4 fw-bold active" aria-current="page" href="/" onClick={logoutAdmin}>
                  LOGOUT
                </a>

            </li>

        </ul>

    </nav>
    
    
    
    
    </>)

   }


   const pendingAdminRouter = () => {
return(<>
<nav>
        <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
            <a className="nav-link pe-3 me-4 fw-bold active" aria-current="page" href="/write_info">
                  WRITE YOUR INFO
                </a>

            </li>

            <li className='nav-item'>
            <a className="nav-link pe-3 me-4 fw-bold active" aria-current="page" href="/" onClick={logoutAdmin}>
                  LOGOUT
                </a>

            </li>


        </ul>

    </nav>
</>)
    

   }


   const suspensionRouter = () => {

 return(<>   <nav>
        <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
            <a className="nav-link pe-3 me-4 fw-bold active" aria-current="page" href="/email_mainadmin">
                  SUSPENDED ACCOUNT
                </a>

            </li>

            <li className='nav-item'>
            <a className="nav-link pe-3 me-4 fw-bold active" aria-current="page" href="/" onClick={logoutAdmin}>
                  LOGOUT
                </a>

            </li>


        </ul>

    </nav>

    </>)



   }


   
   const welcomingAdmins = () => {

    if(isAdmin) {
        return adminRouter()
    } else if (onPending) {
        return pendingAdminRouter()
   
    } else if(onSuspension) {
        return suspensionRouter()
    } else if(isSuperAdmin) {
      return superRouter()
    }


   }

   
   
  return (
    <div className="container">
       
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid pe-lg-2 p-0">
          <a className="navbar-brand fw-bold fs-3" href="/">
            VirtualLibrary
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link pe-3 me-4 fw-bold active" aria-current="page" href="/">
                  HOME
                </a>
              </li>

              {welcomingAdmins()}
              
              
              <li className="nav-item">
                <a className="nav-link pe-3 me-4 fw-bold" href="/">
                  CONTACT
                </a>
              </li>

      { isSuperLogged === true || isLogged === true ? "" :        <li className='nav-item'>   
<a className='nav-link pe-3 me-4 fw-bold' href="/login_panel">LOGIN</a>


</li> }



            </ul>
                      </div>
        </div>
      </nav>
    </div>

    

  );
};

export default Navbar;
