import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { PhotoUpdate } from "../../redux/actions/bookAction";


function BookPhotoUpdate() {
const {id} = useParams()
const[bookImage, setBookImage] = useState(false)
const dispatch = useDispatch()


const handleBookImageUpload = (event) => {
    const file = event.target.files[0];
    setBookImage(file);
  };


  const handleSubmit = async(event) => {

    event.preventDefault()

    let formData = new FormData()

    formData.append('bookImage', bookImage)

    await dispatch(PhotoUpdate(id, formData))

  }





    return(<>
    <Container style={{  fontFamily: "sans-serif", marginTop: "2rem" }}>
    <h4 style={{textAlign: "center", marginBottom: "1rem", color: "red", fontStyle: "cursive"}}>update book photo</h4>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>

            <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formBasicBookImage">
              <Form.Label>Upload book image</Form.Label>
              <Form.Control
                type="file"
                onChange={handleBookImageUpload}
                required
                 accept=".png, .jpg, .jpeg, .webp"
              />
            </Form.Group>


            <Button type="submit">update book photo</Button>




                </Form>
                </Col>
                </Row>
                </Container>


    
    
    </>)
}

export default BookPhotoUpdate