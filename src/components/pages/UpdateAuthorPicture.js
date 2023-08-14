import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalState } from "../../GlobalState"
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import axios from "axios";


function UpdateAuthorPicture() {
  const {id} =  useParams()
 const state =  useContext(GlobalState)
 const token = state.token
 const[authorImage, setAuthorImage] = useState(false)

 const handleAuthorImageUpload = (event) => {
    const file = event.target.files[0];
    setAuthorImage(file);
  };

const handleSubmit = async(event) => {
    event.preventDefault()

    let formData = new FormData()

    formData.append('authorImage', authorImage)

    const res = await axios.put(`/author/update_image/${id}`, formData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    alert(res.data.msg)



}

    return(<>
    <Container style={{marginTop: "4rem", fontFamily: "Times New Roman"}}>
        <h4 className="text-center">Update Author Name</h4>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
      
            <Form onSubmit={handleSubmit} encType="multipart/form-data">


            <Form.Group className="mb-3" controlId="formBasicBookImage">
              <Form.Label>Upload Author Image</Form.Label>
              <Form.Control
                type="file"
                onChange={handleAuthorImageUpload}
                required
                 accept=".jpg"
              />
            </Form.Group>
            <Button type="submit">Create Author</Button>

            </Form>
            </Col>
            </Row>
            </Container>



    
    
    
    </>)
}

export default UpdateAuthorPicture