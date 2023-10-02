import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { GlobalState } from "../../GlobalState"
import axios from "axios"

function SuspendUser() {
   const {id} = useParams()
  const state = useContext(GlobalState)
  const token = state.token
const [role] = useState(0)



  const handleSubmit = async(event) => {
    event.preventDefault()

    const res = await axios.put(`/admin/update_suspend_or_not_suspend_user/${id}`, {role}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    alert(res.data.msg)
    window.location.href = `/show_user/${id}`
  }


    return(<>
    <Container style={{  fontFamily: "sans-serif" }}>
    <h4 style={{textAlign: "center", marginBottom: "1rem"}}> suspend user </h4>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
        
          <Form onSubmit={handleSubmit} encType="multipart/form-data">

          <Form.Group className="mb-3" controlId="formBasicBookTitle">
              <Form.Control
                type="text"
                name="role"
                value={role}
                readOnly
                required
              />
            </Form.Group>

            <Button type="submit">SUSPEND USER</Button>
    
           
    
    </Form>
    </Col>
    </Row>
    </Container>
    </>)
}

export default SuspendUser