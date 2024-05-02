import { useParams } from "react-router-dom"
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AuthorUpdate } from "../../redux/actions/bookAction";

function UpdateAuthor() {
    const {id} = useParams()
    const[formData, setFormData] = useState({
        bookAuthor: ""
    })

    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };


      const handleSubmit = async(event) => {
        event.preventDefault()

        await dispatch(AuthorUpdate(id, formData))


      }
    


    return(<>
    <Container style={{marginTop: "4rem", fontFamily: "Times New Roman"}}>
        <h4 className="text-center">Update Book Author</h4>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
      
            <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="formBasicAuthorName">
                
                <Form.Control
                  type="text"
                  name="bookAuthor"
                  value={ formData.bookAuthor }
                  onChange={handleInputChange}

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

export default UpdateAuthor