import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getUser } from "../../redux/actions/usersAction"
import moment from "moment/moment"
import {Button,   Modal } from 'react-bootstrap';


function ShowUser() {

    const {id} = useParams()
    const user = useSelector((state) => state.userRdcr.user)
    const  dispatch = useDispatch()

    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => {
      setShowModal(false);
    };


    useEffect(() => {

        const fetchUser = async() => {


            await dispatch(getUser(id))


        }

        fetchUser()



    }, [dispatch, id])


    if(!user || user === undefined || user === null) {


        return(<>
        
            <h6 className="text-center" style={{marginTop: "3rem"}}>users are loading</h6>
            
            
            </>)



    }


    return(<div style={{marginTop: "3rem"}}>

<div className="container d-flex justify-content-center align-items-center " style={{fontFamily: "Times New Roman"}}>
      <div className="card text-center">
        <div className="card-body">
    
        
 

          <h5 className="card-title">{user.fullname}</h5>
          
          <p className="card-text">
            
            <strong>
             {user.email}  </strong>
            </p>
            <p className="card-text">
            
            <strong>  {user.phoneNumber}  </strong>
            </p>
            
            <p className="card-text">
            
             ID number: <strong>  {user.idNumber} </strong>
            </p>

            <div className="card-footer">

                <p> <strong> joined on {moment(user.createdAt).format("MMM D YYYY")} </strong> </p>
                
              </div>


          <button  className="btn btn-warning" onClick={() => setShowModal(true)}  style={{marginRight: "2rem"}}>MANAGE USER</button>
         
          
        </div>
      </div>
    </div>

    <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Actions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Take Actions</p>
              <ul>
                <li> <a href={`/suspend_user/${user._id}`}>SUSPEND USER</a> </li>
                <li> <a href={`/unsuspend_user/${user._id}`}>UNSUSPEND USER</a> </li>
               
                <li><a href={`/see_borrowed_books/${user._id}`}>SEE USER BORROWED BOOKS</a></li>
                <li> <a href={`/delete_user/${user._id}`}>DELETE USER</a> </li>
                
              </ul>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>


    
    

    
    
    </div>)
}


export default ShowUser