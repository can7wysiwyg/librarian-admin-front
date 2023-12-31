import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { GlobalState } from "../../GlobalState";
import { useParams } from "react-router-dom";


function UploadBooks() {
 const {id} = useParams()
    const state = useContext(GlobalState)
    const token = state.token;
    const[authors] = state.authorsApi.authors
    const[genres] = state.genresApi.genres
    const[values, setValues] = useState({bookAuthor: id, bookTitle: "", bookISBN: "", bookGenre: "", bookReleaseDate: "",  bookDescription: ""})
    const[bookImage, setBookImage] = useState(false)
    const[bookFile, setBookFile] = useState(false)
    const[person, setPerson] = useState({})

    useEffect(() => {

      if(id) {
        authors.forEach((persona) => {
  
          if(persona._id === id) setPerson(persona)
  
  
        })
      }
  
  
    }, [id, authors])
  
  
    
    
    
    
    const handleChange = (event) => {
        const {name, value} = event.target

        setValues((prevValues) => ({ ...prevValues, [name]: value }))

    }

    const handleBookImageUpload = (event) => {
        const file = event.target.files[0];
        setBookImage(file);
      };
    
      const handleBookFileUpload = (event) => {
        const file = event.target.files[0];
        setBookFile(file);
      };

      
      const handleSubmit = async(event) => {
        event.preventDefault();

    const formData = new FormData();

   formData.append('bookAuthor', values.bookAuthor)
   formData.append('bookDescription', values.bookDescription)
   formData.append('bookGenre', values.bookGenre)
   formData.append('bookISBN', values.bookISBN)
   formData.append('bookTitle', values.bookTitle)
   formData.append('bookReleaseDate', values.bookReleaseDate)
   formData.append('bookImage', bookImage)
   formData.append('bookFile', bookFile)



   const res = await axios.post('/books/add_book', formData, {
    headers: {
        Authorization: `Bearer ${token}`
    }
   } )

  
alert(res.data.msg) 

window.location.href = "/manage_books"


 


  }
    

 
    return(<>
    <Container style={{  fontFamily: "sans-serif" }}>
    <h4 style={{textAlign: "center", marginBottom: "1rem", color: "red", fontStyle: "cursive"}}>Uploading A Book By {person.authorName}</h4>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
        
          <Form onSubmit={handleSubmit} encType="multipart/form-data">
            
            <Form.Group className="mb-3" controlId="formBasicBookImage">
              <Form.Label>Upload book image</Form.Label>
              <Form.Control
                type="file"
                onChange={handleBookImageUpload}
                required
                 accept=".jpg"
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

            <Form.Group className="mb-3" controlId="formBasicBookTitle">
              <Form.Control
                type="text"
                name="bookTitle"
                value={values.bookTitle}
                onChange={handleChange}
                placeholder="Book Title"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Control
                as="textarea"
                rows="3"
                name="bookDescription"
                value={values.bookDescription}
                onChange={handleChange}
                placeholder="A short description of the book"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicBookRelease">
              <Form.Control
                type="date"
                name="bookReleaseDate"
                value={values.bookReleaseDate}
                onChange={handleChange}
                placeholder="Book Release Date"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicBookISBN">
              <Form.Control
                type="text"
                name="bookISBN"
                value={values.bookISBN}
                onChange={handleChange}
                placeholder="Book ISBN"
                required
              />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicBookGenre">
              <Form.Select
                name="bookGenre"
                value={values.bookGenre}
                onChange={handleChange}
                required
              >
                <option value="">Select Book Genre</option>
                {genres.map((genre) => (
                  <option value={genre._id} key={genre._id}>
                    {genre.genreName}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Button variant="warning" type="submit">
              Upload book
            </Button>

          
          </Form>
        </Col>
      </Row>
    </Container>
    
    
    
    </>)
}

export default UploadBooks