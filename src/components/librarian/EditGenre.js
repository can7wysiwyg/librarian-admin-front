import { useParams } from "react-router-dom"
import { editGenre } from "../../redux/actions/genreAction";
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Container, Form, Row, Col, Button } from "react-bootstrap";


function EditGenre() {
    const {id} = useParams()
    const[formData, setFormData] = useState({genreName: ""})
    const dispatch = useDispatch()
 
    const handleInputChange = (e) => {
     setFormData({
       ...formData,
       [e.target.name]: e.target.value,
     });
   };
 
 
   const handleSubmit = async(event) => {
     event.preventDefault()
 
     dispatch(editGenre(id, formData))
 
   }
 

    return(<>

<Container style={{marginTop: "4rem", fontFamily: "Times New Roman"}}>
        <h4 className="text-center">Update Book Genre</h4>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
      
            <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formBasicGenreName">
                
                <Form.Control
                  type="text"
                  name="genreName"
                  value={formData.genreName }
                  onChange={handleInputChange}

                  placeholder="Book Genre"
                  required
                />
              </Form.Group>

              <Button type="submit">Update Genre</Button>




                </Form>
                </Col>
                </Row>
                </Container>

    
    
    </>)
} 

export default EditGenre