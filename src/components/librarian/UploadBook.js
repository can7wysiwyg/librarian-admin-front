import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

function UploadBook() {
    const[formDatta, setFormDatta] = useState({bookAuthor: "", bookTitle: "", bookISBN: "", bookGenre: "", bookReleaseDate: "",  bookDescription: ""})
    const[bookImage, setBookImage] = useState(false)
    const[bookFile, setBookFile] = useState(false)


    const handleInputChange = (e) => {
        setFormDatta({
          ...formDatta,
          [e.target.name]: e.target.value,
        });
      };

      const handleBookImageUpload = (event) => {
        const file = event.target.files[0];
        setBookImage(file);
      };
    
      const handleBookFileUpload = (event) => {
        const file = event.target.files[0];
        setBookFile(file);
      };


     
      const handleSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData();

        formData.append('bookAuthor', formDatta.bookAuthor)
        formData.append('bookDescription', formDatta.bookDescription)
        formData.append('bookGenre', formDatta.bookGenre)
        formData.append('bookReleaseDate', formDatta.bookReleaseDate)
        formData.append('bookISBN', formDatta.bookISBN)
        formData.append('bookTitle', formDatta.bookTitle)
        formData.append('bookFile', bookFile)
        formData.append('bookImage', bookImage)



      }
      




    return(<>
    <Container style={{  fontFamily: "sans-serif", marginTop: "2rem" }}>
    <h4 style={{textAlign: "center", marginBottom: "1rem", color: "red", fontStyle: "cursive"}}>upload new book</h4>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>

            <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formBasicBookImage">
              <Form.Label>Upload book image</Form.Label>
              <Form.Control
                type="file"
                onChange={handleBookImageUpload}
                required
                 accept=".jpg .png"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicBookFile">
              <Form.Label>Upload book file</Form.Label>
              <Form.Control
                type="file"
                onChange={handleBookFileUpload}
                required
                accept=".pdf"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicBookAuthor">
              <Form.Control
                type="text"
                name="bookAuthor"
                value={formDatta.bookAuthor}
                onChange={handleInputChange}
                placeholder="Book Author"
                required
              />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicBookTitle">
              <Form.Control
                type="text"
                name="bookTitle"
                value={formDatta.bookTitle}
                onChange={handleInputChange}
                placeholder="Book Title"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Control
                as="textarea"
                rows="3"
                name="bookDescription"
                value={formDatta.bookDescription}
                onChange={handleInputChange}
                placeholder="A short description of the book"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicBookRelease">
              <Form.Control
                type="date"
                name="bookReleaseDate"
                value={formDatta.bookReleaseDate}
                onChange={handleInputChange}
                placeholder="Book Release Date"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicBookISBN">
              <Form.Control
                type="text"
                name="bookISBN"
                value={formDatta.bookISBN}
                onChange={handleInputChange}
                placeholder="Book ISBN"
                required
              />
            </Form.Group>

<Button type="submit">upload book</Button>
</Form>




            </Col>
            </Row>
            </Container>
            
    
    
    
    
    </>)
}

export default UploadBook