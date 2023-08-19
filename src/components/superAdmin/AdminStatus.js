import axios from "axios";
import { useState, useContext } from "react";
import { GlobalState } from "../../GlobalState";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";




function AdminStatus() {
   const{id} = useParams()
   const state = useContext(GlobalState)
   const supertoken = state.supertoken
   const[admin, setAdmin] = useState("")

   const handleChange = (event) => {
    setAdmin(event.target.value)
   }

   const handleSubmit = async(event) => {
    event.preventDefault()

    const res = await axios.put(`/mainadmin/make_admin/${id}`, {admin}, {
        headers: {
            Authorization: `Bearer ${supertoken}`
        }
    })


    alert(res.data.msg)
    window.location.href = '/change_admin_status'

   }


    return(<>
    <Container style={{marginTop: "4rem", fontFamily: "Times New Roman"}}>
        <div style={{textAlign: "center", marginBottom: "2rem"}}>
        <h4 >you are about to update the librarian's role.</h4>
        <h5 > to give access to the librarian to do their tasks..</h5>
        <p  > please, assign <span style={{color: "red", fontWeight: "bolder"}}>1</span>  to them..</p>
        </div>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
      
            <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formBasicGender">
                
                <Form.Control
                  type="number"
                  name="admin"
                  value={ admin }
                  onChange={handleChange}

                  placeholder="Admin Status"
                  required
                />
              </Form.Group>

              <Button type="submit">Submit Your Info</Button>


                </Form>
                </Col>
                </Row>
                </Container>

    
    
    </>)
}

export default AdminStatus