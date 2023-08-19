import axios from "axios";
import { useState, useContext } from "react";
import { GlobalState } from "../../GlobalState";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";



function AccountStatus() {
    const{id} = useParams()
   const state = useContext(GlobalState)
   const supertoken = state.supertoken
   const[accountStatus, setStatus] = useState("")
   
   const handleRadioChange = (event) => {
    const newValue = event.target.value === 'true';
    setStatus(newValue);
  };

  

   
   const handleSubmit = async(event) => {
    event.preventDefault()

    const res = await axios.put(`/mainadmin/suspend_admin/${id}`, {accountStatus}, {
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
            
        <h4 >you are about to update the librarian's account status.</h4>
        <h5 > to give access to the librarian to do their tasks..</h5>
        <p  > please, select a value between <span style={{color: "red", fontWeight: "bolder"}}>true or false</span>..</p>
        <p>choose false to suspend the account... </p>
        <p>and true to remove the account from suspension</p>
        </div>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
      
            <Form onSubmit={handleSubmit}>

            <Form.Group>
              <Form.Label>Choose an option:</Form.Label>
              <Form.Check
                type="radio"
                label="True"
                name="accountStatus"
                value="true"
                checked={accountStatus === true}
                onChange={handleRadioChange}
              />
              <Form.Check
                type="radio"
                label="False"
                name="accountStatus"
                value="false"
                checked={accountStatus === false}
                onChange={handleRadioChange}
              />
            </Form.Group>

            <Button type="submit">Change Account Status</Button>

    </Form>
    </Col>
    </Row>
    </Container>
    
    </>)
}

export default AccountStatus