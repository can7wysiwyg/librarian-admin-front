import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import "../styles/navbar.css"
import { GlobalState } from '../../GlobalState';

const Navbar = () => {
   const state = useContext(GlobalState)
//    const token = state.token
   const[isLogged] = state.adminApi.isLogged
   const[isAdmin] = state.adminApi.isAdmin
   const[onPending] = state.adminApi.onPending
   const[onSuspension] = state.adminApi.onSuspension
   
   

   const logoutAdmin = () => {
    localStorage.removeItem("token")
    window.location.href = "/"

   }



   const loggedRouter = () => {
     
   return (
    <>
    
    <nav>
        <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
            <a className="nav-link pe-3 me-4 fw-bold active" aria-current="page" href="/" onClick={logoutAdmin}>
                  logout
                </a>

            </li>

        </ul>

    </nav>
    
    
    
     </> )



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
            <a className="nav-link pe-3 me-4 fw-bold active" aria-current="page" href="/books" >
                  BOOKS
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
            <a className="nav-link pe-3 me-4 fw-bold active" aria-current="page" href="/email_mainadmin">
                  EMAIL ADMIN
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
              
              {/* <li className="nav-item">
                <a className="nav-link pe-3 me-4 fw-bold" href="/">
                  BLOG
                </a> 
              </li> */}

              <li className="nav-item">
                <a className="nav-link pe-3 me-4 fw-bold" href="/">
                  CONTACT
                </a>
              </li>
              {isLogged ? (
                loggedRouter()
              ) : (
<li className='nav-item'>   
<a className='nav-link pe-3 me-4 fw-bold' href="/login">LOGIN</a>


</li>

              ) }

            </ul>
            <ul className="navbar-nav icons ms-auto mb-2 mb-lg-0">
              <li className="nav-item pe-3">
                <a href="/" className="fas fa-heart">
                  <FontAwesomeIcon icon={faHeart} />
                  {/* <span className="num rounded-circle">1</span> */}
                </a>
              </li>
              <li className="nav-item pe-3">
                <a href="/" className="fas fa-shopping-bag">
                  <FontAwesomeIcon icon={faShoppingBag} />
                  {/* <span className="num rounded-circle">3</span> */}
                </a>
              </li>
              {/* <li className="nav-item">
                <span className="">items:</span>
                <span className="fw-bold">$150.00</span>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>

    

  );
};

export default Navbar;
