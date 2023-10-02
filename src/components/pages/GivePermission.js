import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { GlobalState } from "../../GlobalState"
import axios from "axios"

function GivePermission() {
   const {id} = useParams()
  const state = useContext(GlobalState)
  const token = state.token
const [permToBorrow, setValue] = useState(false)



  const handleSubmit = async(event) => {
    event.preventDefault()

    const res = await axios.put(`/admin/update_member_status/${id}`, {permToBorrow}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    console.log(res);

    alert(res.data.msg)
    window.location.href = `/show_user/${id}`
  }


    return(<>
    <Container style={{  fontFamily: "sans-serif" }}>
    <h4 style={{textAlign: "center", marginBottom: "1rem", color: "red", fontStyle: "cursive"}}>write <strong> true </strong> to suspend user </h4>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
        
          <Form onSubmit={handleSubmit} encType="multipart/form-data">

          <Form.Group className="mb-3" controlId="formBasicBookTitle">
              <Form.Control
                type="text"
                name="permToBorrow"
                value={permToBorrow}
                onChange={(e) => setValue(e.target.value.toLowerCase()) }
                placeholder="write true"
                required
              />
            </Form.Group>

            <Button type="submit">USER WILL BORROW BOOKS</Button>
    
           
    
    </Form>
    </Col>
    </Row>
    </Container>
    </>)
}

export default GivePermission