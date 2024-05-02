import { useParams } from "react-router-dom"
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { TitleUpdate } from "../../redux/actions/bookAction";

function UpdateTitle() {
    const {id} = useParams()
    const[formData, setFormData] = useState({
        bookTitle: ""
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

        await dispatch(TitleUpdate(id, formData))


      }
    


    return(<>
    <Container style={{marginTop: "4rem", fontFamily: "Times New Roman"}}>
        <h4 className="text-center">Update Book Title</h4>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
      
            <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="formBasicBookTitle">
                
                <Form.Control
                  type="text"
                  name="bookTitle"
                  value={ formData.bookTitle }
                  onChange={handleInputChange}

                  placeholder="Book Title"
                  required
                />
              </Form.Group>



            <Button type="submit">Update Book Title</Button>
            </Form>
            </Col>
            </Row>
            </Container>
    

    
    
    </>)
}

export default UpdateTitle