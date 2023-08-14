import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalState } from "../../GlobalState"
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import axios from "axios";


function UpdateAuthorBio() {
    const {id} =  useParams()
    const state =  useContext(GlobalState)
    const token = state.token
    const[authorShortBio, setAuthorShortBio] = useState("")

    const handleChange = (event) => {
        setAuthorShortBio(event.target.value)
    }

    const handleSubmit = async(event) => {
        event.preventDefault()

        const res = await axios.put(`/author/edit_author/${id}`, {authorShortBio}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        alert(res.data.msg)
    }
   
    return(<>
    <Container style={{marginTop: "4rem", fontFamily: "Times New Roman"}}>
        <h4 className="text-center">Update Author Bio</h4>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
      
            <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="formBasicAuthorShortBio">
              <Form.Control
                as="textarea"
                rows="4"
                name="authorShortBio"
                value={authorShortBio}
                onChange={handleChange}
                placeholder="A short summary of the author"
                required
              />



              </Form.Group>


 <Button type="submit">Update Author Bio</Button>
                </Form>
                </Col>
                </Row>
                </Container>

    
    
    </>)
}

export default UpdateAuthorBio