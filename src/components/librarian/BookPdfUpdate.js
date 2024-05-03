import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { PdfUpdate } from "../../redux/actions/bookAction";



function BookPdfUpdate() {
    const {id} = useParams()
    const[bookFile, setBookFile] = useState(false)
    const dispatch = useDispatch()

    const handleBookFileUpload = (event) => {
        const file = event.target.files[0];
        setBookFile(file);
      };


      const handleSubmit = async(event) => {

        event.preventDefault()
    
        let formData = new FormData()
    
        formData.append('bookFile', bookFile)
    
        await dispatch(PdfUpdate(id, formData))
    
      }
    
      return(<>

<Container style={{  fontFamily: "sans-serif", marginTop: "2rem" }}>
    <h4 style={{textAlign: "center", marginBottom: "1rem", color: "red", fontStyle: "cursive"}}>update book pdf file</h4>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>

            <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formBasicBookFile">
              <Form.Label>Upload book file</Form.Label>
              <Form.Control
                type="file"
                onChange={handleBookFileUpload}
                required
                accept=".pdf"
              />
            </Form.Group>




            <Button type="submit">update book photo</Button>




</Form>
</Col>
</Row>
</Container>


      
      
      
      
      
      </>)



}


export default BookPdfUpdate