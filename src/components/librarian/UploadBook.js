import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../redux/actions/genreAction";
import { BookUpload } from "../../redux/actions/bookAction";

function UploadBook() {
    const[formDatta, setFormDatta] = useState({bookAuthor: "", bookTitle: "", bookISBN: "", bookGenre: "", bookReleaseDate: "",  bookDescription: ""})
    const[bookImage, setBookImage] = useState(false)
    const[bookFile, setBookFile] = useState(false)

    const genres = useSelector((state) => state.genreRdcr.genres)



  const dispatch =  useDispatch()


  useEffect(() => {

    const fetchData = async() => {
     
      try {
        await dispatch(getGenres())
        
      } catch (error) {
        console.error("there was a problem")
      }

    }

    fetchData()


  }, [dispatch])


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


     
      const handleSubmit = async(event) => {
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


       await dispatch(BookUpload(formData))


      }


  if(!genres || genres === undefined || genres === null) {
    return(<>
    
    <h6 className="text-center" style={{marginTop: "2rem"}}>book genres are loading</h6>
    </>)
  }    
      

if(genres.length === 0) {

  alert('THERE ARE NO BOOK GENRES! TO UPLOAD A BOOK, PLEASE CREATE A GENRE FIRST...')
  window.location.href = "/create_category"

}


console.log(genres);


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
                 accept=".png, .jpg, .jpeg, .webp"
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


            <Form.Group className="mb-3" controlId="formBasicBookGenre">
              <Form.Select
                name="bookGenre"
                value={formDatta.bookGenre}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Book Genre</option>
                {genres?.map((genre) => (
                  <option value={genre._id} key={genre._id}>
                    {genre.genreName}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>



<Button type="submit">upload book</Button>
</Form>




            </Col>
            </Row>
            </Container>
            
    
    
    
    
    </>)
}

export default UploadBook