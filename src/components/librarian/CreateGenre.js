import { useState } from "react"
import { useDispatch } from "react-redux"
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { GenreCreate } from "../../redux/actions/genreAction";


function CreateGenre() {
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

    dispatch(GenreCreate(formData))

  }


  console.log(formData.genreName)



    return(<>
     <Container style={{marginTop: "4rem", fontFamily: "Times New Roman"}}>
        <h4 className="text-center">Create Book Genre</h4>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
      
            <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formBasicBookGenre">
  <Form.Select
    name="genreName"
    value={formData.genreName}
    onChange={handleInputChange}
    required
  >
    <option value="" disabled>
      Select a Book Genre
    </option>
    <option value="Fiction">
      Fiction
    </option>
    <option value="Non-Fiction">
      Non-Fiction
    </option>
  </Form.Select>
</Form.Group>



            


            {/* <Form.Group className="mb-3" controlId="formBasicGenreName"> */}
                
                {/* <Form.Control
                  type="text"
                  name="genreName"
                  value={formData.genreName }
                  onChange={handleInputChange}

                  placeholder="Book Genre"
                  required
                />
              </Form.Group> */}

              <Button type="submit">Create Genre</Button>




                </Form>
                </Col>
                </Row>
                </Container>

    
    
    </>)
}

export default CreateGenre