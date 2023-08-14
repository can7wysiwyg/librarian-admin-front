import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalState } from "../../GlobalState"
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import axios from "axios";



function UpdateAuthorCountry() {
    const {id} =  useParams()
    const state =  useContext(GlobalState)
    const token = state.token
    const[authorCountry, setAuthorCountry] = useState("")

    const handleChange = (event) => {
        setAuthorCountry(event.target.value)
    }

    const handleSubmit = async(event) => {
        event.preventDefault()

        const res = await axios.put(`/author/edit_author/${id}`, {authorCountry}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        alert(res.data.msg)
    }
   
    return(<>
    <Container style={{marginTop: "4rem", fontFamily: "Times New Roman"}}>
        <h4 className="text-center">Update Country</h4>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
      
            <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="formBasicAuthorCountry">
                
                <Form.Control
                  type="text"
                  name="authorCountry"
                  value={ authorCountry }
                  onChange={handleChange}

                  placeholder="Author Country"
                  required
                />
              </Form.Group>



            <Button type="submit">Update Author Country</Button>
            </Form>
            </Col>
            </Row>
            </Container>
    
    
    </>)
}

export default UpdateAuthorCountry