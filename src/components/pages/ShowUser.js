import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import moment from "moment/moment"
import {Button,   Modal } from 'react-bootstrap';


function ShowUser() {
  const {id} =  useParams()
  const[result, setResult] = useState({})
  const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => {
      setShowModal(false);
    };
  

  useEffect(() => {

    const getUser = async() => {
        const res = await axios.get(`/userroute/show_user/${id}`)

        setResult(res.data.user)


    }

    getUser()

  }, [id])

    return(<>
        <div className="container d-flex justify-content-center align-items-center ">
      <div className="card text-center">
        <div className="card-body">
        <img className="card-img-top img-responsive" src={result.userImage} alt={result.fullname} style={{
                  maxWidth: "90%",
                  maxHeight: "90%",
                  objectFit: "contain"
                }}
 />

          <h5 className="card-title">{result.fullname}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{result.location}</h6>
          <p className="card-text">
            
           user email: <strong>
             <em>   {result.email} </em> </strong>
            </p>
            <p className="card-text">
            
           user phone number: <strong> <em>  {result.phoneNumber} </em> </strong>
            </p>
            <p className="card-text">
            
           user birth date: <strong> <em>  {result.DOB} </em> </strong>
            </p>
            <p className="card-text">
            
             user ID number: <strong> <em> {result.idNumber} </em> </strong>
            </p>

            <div className="card-footer">

                <p> <strong> joined on {moment(result.createdAt).format("MMM D YYYY")} </strong> </p>
                
              </div>


          <button  className="btn btn-warning" onClick={() => setShowModal(true)}  style={{marginRight: "2rem"}}>MaNAGE USER</button>
         
          
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
                <li> <a href={`/suspend_user/${result._id}`}>SUSPEND USER</a> </li>
                <li> <a href={`/unsuspend_user/${result._id}`}>UNSUSPEND USER</a> </li>
                <li> <a href={`/permission_to_borrow/${result._id}`}>GIVE USER PERMISSION TO BORROW BOOKS </a> </li>
                <li><a href={`/remove_permission/${result._id}`}>REMOVE USER PERMISSION TO BORROW BOOKS</a></li>
                <li><a href={`/see_borrowed_books/${result._id}`}>SEE USER BORROWED BOOKS</a></li>
                <li> <a href={`/delete_user/${result._id}`}>DELETE USER</a> </li>
                
              </ul>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>


    
    
    
    </>)
}

export default ShowUser