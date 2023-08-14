import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalState } from "../../GlobalState"
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import axios from "axios";



function UpdateAuthorName() {
    const {id} =  useParams()
    const state =  useContext(GlobalState)
    const token = state.token
    const[authorName, setAuthorName] = useState("")

    const handleChange = (event) => {
        setAuthorName(event.target.value)
    }

    const handleSubmit = async(event) => {
        event.preventDefault()

        const res = await axios.put(`/author/edit_author/${id}`, {authorName}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        alert(res.data.msg)
    }
   
    return(<>
    <Container style={{marginTop: "4rem", fontFamily: "Times New Roman"}}>
        <h4 className="text-center">Update Name</h4>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
      
            <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="formBasicAuthorName">
                
                <Form.Control
                  type="text"
                  name="authorName"
                  value={ authorName }
                  onChange={handleChange}

                  placeholder="Author Name"
                  required
                />
              </Form.Group>



            <Button type="submit">Update Author Name</Button>
            </Form>
            </Col>
            </Row>
            </Container>
    
    
    </>)
}

export default UpdateAuthorName